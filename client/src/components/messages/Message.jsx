import React from 'react'
import { useAuthContext } from '../../context/authContext.jsx'
import useConversation from '../../store/useConversation'
import { extractTime } from '../../utils/extractTime.js'

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassNames = fromMe ? 'chat chat-end' : ' chat chat-start'
  const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture
  const bubbleColor = fromMe ? 'bg-blue-500' : 'bg-gray-500'
  const shakeClasse = message.shouldShake ? 'shake' : ''

  return (
    <div className={chatClassNames}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={profilePicture} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} ${shakeClasse} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{extractTime(message.createdAt)}</div>
    </div>
  )
}

export default Message
