import Conversation from '../models/conversationModel.js'
import Message from '../models/messageModel.js'

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const { id: receiverId } = req.params
    const senderId = req.user._id

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }

    // SOCKET IO FUNCTIONNALITY

    // await conversation.save()
    // await newMessage.save()

    // This will run in parallel
    await Promise.all([conversation.save(), newMessage.save()])

    res.status(201).json(newMessage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages') // not reference but actual messages objects

    if (!conversation) return res.status(200).json([])

    const messages = conversation.messages

    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
