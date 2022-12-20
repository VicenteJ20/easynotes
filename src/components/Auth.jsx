import { UserContext } from '../context/UserProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Auth = ({ children }) => {
  const { user } = useContext(UserContext)

  if (user === null) {
    return <Navigate to='/login' />
  } else {
    return children
  }
}

export default Auth
