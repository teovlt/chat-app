import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Register from './pages/signUp/Register.jsx'
import Login from './pages/signIn/Login.jsx'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authContext.jsx'

function App() {
  const { authUser } = useAuthContext()

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/register' element={authUser ? <Navigate to={'/'} /> : <Register />} />
        <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
