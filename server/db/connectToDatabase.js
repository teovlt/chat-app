import mongoose from 'mongoose'

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log('Connected to the MongoDB')
  } catch (error) {
    console.log('Error connecting to the database: ', error.message)
  }
}

export default connectToDatabase
