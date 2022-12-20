import { Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import Home from './pages/Home'
import Auth from './components/Auth'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import '../src/styles/App.css'

function App () {
  const { user } = useContext(UserContext)

  if (user === undefined) {
    return <p>Loading</p>
  }

  return (
    <Routes>
      <Route path='/' element={<Auth><Home /></Auth>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<h1 className='404'>No se encontró la página</h1>} />
    </Routes>
  )
}

export default App
