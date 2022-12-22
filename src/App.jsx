import { Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import Home from './pages/Home/Home'
import Auth from './components/Auth'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import '../src/styles/App.css'
import Loader from './components/Loader'
import NotFound from './components/NotFound'
import Dashboard from './pages/Dashboard/Dashboard'

function App () {
  const { user } = useContext(UserContext)

  if (user === undefined) {
    return <Loader />
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Auth><Dashboard /></Auth>}>
        <Route path='/dashboard/notes' element={<Loader />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
