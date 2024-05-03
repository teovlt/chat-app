import { Server } from 'socket.io'
import http from 'http'
import Express from 'express'

const app = Express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

const userSocketMap = {} // { userId: socketId }

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  const userId = socket.handshake.query.userId
  if (userId !== undefined) {
    userSocketMap[userId] = socket.id
  }

  //Send events to all the connected clients
  io.emit('getOnlineUsers', Object.keys(userSocketMap))

  //used to listen to the events,can be used both on the server and client side
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id)
    delete userSocketMap[userId]
    io.emit('getOnlineUsers', Object.keys(userSocketMap))
  })
})

export { app, io, server }
