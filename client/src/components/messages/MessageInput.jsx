import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const { sendMessage, loading } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!message.trim()) return

    await sendMessage(message)
    setMessage('')
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <span className='w-6 h-6 text-white animate-spin' /> : <BsSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput

{
  /* <form className='px-4 my-3'>
<div className='w-full'>
<input
  type='text'
  className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
  placeholder='Send a message'
/>
<button type='submit' className='absolute inset-y-0 end-0 flex items pe-3'>
  <BsSend />
</button>
</div>
</form> */
}
