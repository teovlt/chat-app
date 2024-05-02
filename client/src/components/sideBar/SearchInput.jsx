import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import useConversation from '../../store/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search.trim()) return

    if (search.length < 3) {
      return toast.error(' Search must be greater than 3 characters')
    }
    const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()))

    if (conversation) {
      toast.success('User ' + `"${search}"` + ' found')
      setSelectedConversation(conversation)
      setSearch('')
    } else {
      toast.error('User ' + `"${search}"` + ' not found')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search...'
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput

// import { IoSearchSharp } from 'react-icons/io5'

// function SearchInput() {
//   return (
//     <form className='flex items-center gap-2'>
//       <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
//       <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//         <IoSearchSharp className='w-6 h-6 outline-none' />
//       </button>
//     </form>
//   )
// }

// export default SearchInput
