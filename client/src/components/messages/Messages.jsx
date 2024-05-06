import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const { messages, loading } = useGetMessages()
  const lastMessageRef = useRef()
  useListenMessages()
  useEffect(() => {
    setTimeout(() => lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div ref={lastMessageRef} key={message._id} className='max-w-lg'>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && <p className='text-center text-white'>Send a message to start the conversation</p>}
    </div>
  )
}

export default Messages
