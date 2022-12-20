import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Home () {
  const { user, signOutUser } = useContext(UserContext)

  return (
    <>
      <h1>Este es el Home</h1>
      <h2>Bienvenido: {user.email}</h2>
      <section>
        <button onClick={signOutUser}>Cerrar sesión</button>
      </section>
    </>
  )
}
