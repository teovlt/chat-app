import React from 'react'
import useConversation from '../../store/useConversation'

function Conversation({ conversation, emoji, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer
      ${isSelected ? 'bg-sky-400' : ''}
      `}
        onClick={isSelected ? () => setSelectedConversation(null) : () => setSelectedConversation(conversation)}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full '>
            <img src={conversation.profilePicture} alt='user avatar' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{conversation.username}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>
      {lastIdx ? null : <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default Conversation

// function Conversation() {
//     return (
//       <>
//         <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//           <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//               <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' alt='user avatar' />
//             </div>
//           </div>
//           <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//               <p className='font-bold text-gray-200'>VILLET Téo</p>
//               <span className='text-xl'>💀</span>
//             </div>
//           </div>
//         </div>
//         <div className='divider my-0 py-0 h-1' />
//       </>
//     )
//   }
