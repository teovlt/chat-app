import { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from './authContext'
import io from 'socket.io-client'

const socketContext = createContext()

export const useSocketContext = () => {
  return useContext(socketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const { authUser } = useAuthContext()

  useEffect(() => {
    if (authUser) {
      const socket = io('https://chat-app-production-905w.onrender.com', {
        query: {
          userId: authUser._id,
        },
      })
      setSocket(socket)

      //used to listen to the events,can be used both on the server and client side
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users)
      })

      return () => socket.close()
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return <socketContext.Provider value={{ socket, onlineUsers }}>{children}</socketContext.Provider>
}
