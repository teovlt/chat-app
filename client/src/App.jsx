import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Register from './pages/signUp/Register.jsx'
import Login from './pages/signIn/Login.jsx'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={Login} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
