import Express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import connectToDatabase from './db/connectToDatabase.js'
import cookieParser from 'cookie-parser'

//Config of dotenv so we can use our variables
dotenv.config()

// Server
const app = Express()
const PORT = process.env.PORT

app.use(Express.json()) //to parse the incoming requests with JSON payloads
app.use(cookieParser())

// Auth routes
app.use('/api/auth', authRoutes)
//Messages routes
app.use('/api/messages', messageRoutes)

app.listen(PORT, () => {
  connectToDatabase()
  console.log(`Server is running on port ${PORT} 🚀`)
})
