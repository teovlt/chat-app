import Express from 'express'
import isAuthenticated from '../middleware/isAuthenticated.js'
import { getUsers } from '../controllers/userController.js'

const router = Express.Router()

router.get('/', isAuthenticated, getUsers)

export default router
