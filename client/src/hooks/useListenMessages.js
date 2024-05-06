import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../store/useConversation'
import notificationSound from '../assets/sounds/notification.mp3'

const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages, selectedConversation } = useConversation()

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      if (messages.length === 0 && selectedConversation._id === newMessage.senderId) {
        newMessage.shouldShake = true
        const sound = new Audio(notificationSound)
        sound.play()
        setMessages([...messages, newMessage])
      } else {
        if (newMessage.senderId === selectedConversation._id) {
          newMessage.shouldShake = true
          const sound = new Audio(notificationSound)
          sound.play()
          setMessages([...messages, newMessage])
        }
      }
    })
    return () => socket?.off('newMessage')
  }, [socket, setMessages, messages])
}

export default useListenMessages
