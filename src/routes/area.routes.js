import {Router} from 'express'
import {getArea} from '../controllers/contolladorArea'

const router = Router();

router.get('/area', getArea);

export default router;