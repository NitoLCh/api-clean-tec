import {Router} from 'express'
import {getPersonal, createNewPersonal} from '../controllers/controladorPersonal'

const router = Router();

router.get('/personal', getPersonal)
router.get('/personal', getPersonal)
router.post('/personal', createNewPersonal)
router.delete('/personal', getPersonal)
router.put('/personal', getPersonal)

export default router;