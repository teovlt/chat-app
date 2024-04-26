import Express from 'express'
import { sendMessage } from '../controllers/messageController.js'
import isAuthenticated from '../middleware/isAuthenticated.js'

const router = Express.Router()

router.post('/send/:id', isAuthenticated, sendMessage)

export default router
