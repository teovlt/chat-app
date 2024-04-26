import Express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import connectToDatabase from './db/connectToDatabase.js'

//Config of dotenv so we can use our variables
dotenv.config()

// Server
const app = Express()
const PORT = process.env.PORT

app.use(Express.json()) //to parse the incoming requests with JSON payloads

// Auth routes
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  connectToDatabase()
  console.log(`Server is running on port ${PORT} 🚀`)
})
