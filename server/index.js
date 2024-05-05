import Express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectToDatabase from './db/connectToDatabase.js'
import { app, server } from './socket/socket.js'

//Config of dotenv so we can use our variables
dotenv.config()

// Server
const PORT = process.env.PORT

const __dirname = path.resolve()

app.use(Express.json()) //to parse the incoming requests with JSON payloads
app.use(cookieParser())

// Auth routes
app.use('/api/auth', authRoutes)
//Messages routes
app.use('/api/messages', messageRoutes)
// Users routes
app.use('/api/users', userRoutes)

app.use(Express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

server.listen(PORT, () => {
  connectToDatabase()
  console.log(`Server is running on port ${PORT} 🚀`)
})
