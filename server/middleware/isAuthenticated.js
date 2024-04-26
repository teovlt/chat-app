import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) {
      res.status(401).json({ error: 'Unhautorized - No token provided' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) {
      res.status(401).json({ error: 'Unhautorized -Token is invalid' })
    }

    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      res.status(401).json({ error: 'User not found' })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default isAuthenticated
