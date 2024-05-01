import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emoji'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, index) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={index === conversations.length - 1}
          />
        )
      })}

      {loading ? <span className='w-6 h-6 text-white animate-spin' /> : null}
    </div>
  )
}

export default Conversations

// function Conversations() {
//     return (
//       <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//       </div>
//     )
//   }
