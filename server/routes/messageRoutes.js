import Express from 'express'
import { sendMessage, getMessages } from '../controllers/messageController.js'
import isAuthenticated from '../middleware/isAuthenticated.js'

const router = Express.Router()

router.get('/:id', isAuthenticated, getMessages)
router.post('/send/:id', isAuthenticated, sendMessage)

export default router
