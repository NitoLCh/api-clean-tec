import express from "express";
import config from "./config";
import personalRoutes from './routes/personal.routes'
import areaRoutes from './routes/area.routes'

const app = express();

//settings
app.set('port', config.port || 3000);

app.use(express.json())
app.use(express.urlencoded({ esxtended: false }))
app.use(personalRoutes)
app.use(areaRoutes)


export default app;