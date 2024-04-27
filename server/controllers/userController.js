import User from '../models/userModel.js'

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id

    // without the logged user and the passwords
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password')

    return res.status(200).json(allUsers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
