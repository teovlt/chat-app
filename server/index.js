import Express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectToDatabase from './db/connectToDatabase.js'

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
// Users routes
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  connectToDatabase()
  console.log(`Server is running on port ${PORT} 🚀`)
})
