import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const { loading, logout } = useLogout()
  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      ) : (
        <span className='w-6 h-6 text-white animate-spin' />
      )}
    </div>
  )
}

export default LogoutButton
