import express from "express";
import config from "./config";
import personalRoutes from './routes/personal.routes'

const app = express();

//settings
app.set('port', config.port || 3000);
app.use(personalRoutes)


export default app;