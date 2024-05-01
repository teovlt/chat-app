import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const signUp = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputsError(fullName, username, password, confirmPassword, gender)
    if (!success) return

    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.setItem('authUser', JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { signUp, loading }
}

export default useSignup

function handleInputsError(fullName, username, password, confirmPassword, gender) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields')
    return false
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }

  return true
}
