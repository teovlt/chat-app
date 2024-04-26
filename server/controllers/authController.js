import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  try {
    const { fullName, username, gender, password, confirm } = req.body
    if (password !== confirm) {
      return res.status(400).json({ error: "Passwords don't match" })
    }

    const user = await User.findOne({ username })
    if (user) {
      return res.status(400).json({ error: 'Username already exists' })
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyProfilPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilPic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === 'male' ? boyProfilPic : girlProfilPic,
    })

    //Generate JWT token
    await newUser.save()

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePicture: newUser.profilePicture,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const login = (req, res) => {
  console.log('login')
}

export const logout = (req, res) => {
  console.log('logout')
}
