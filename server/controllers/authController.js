import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const register = async (req, res) => {
  try {
    const { fullName, username, gender, password, confirmPassword } = req.body

    //Check if all fields are filled
    if (!fullName || !username || !gender || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Please fill in all fields' })
    }

    //Check if passwords are the same
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" })
    }

    //Check if the username already exists
    const user = await User.findOne({ username })
    if (user) {
      return res.status(400).json({ error: 'Username already exists' })
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyProfilPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilPic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    //Create new user
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === 'male' ? boyProfilPic : girlProfilPic,
    })

    //Generate JWT token
    generateTokenAndSetCookie(newUser._id, res)
    await newUser.save()

    //Send response to the client
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

export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ error: 'Please fill in all fields' })
    }

    const user = await User.findOne({ username })
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || '')
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: 'Invalid username or password' })
    }

    generateTokenAndSetCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', {
      maxAge: 0,
    })
    res.status(200).json({ message: 'Logged out successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
