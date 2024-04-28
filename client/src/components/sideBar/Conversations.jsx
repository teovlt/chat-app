import React from 'react'
import Conversation from './Conversation'

function Conversations() {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
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
