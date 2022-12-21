import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

export default function NotFound () {
  return (
    <section className='NotFound'>
      <header className='headerNotFound'>Easy<span className='color-brand'>Notes</span></header>
      <h2>¡OOOOOPS!</h2>
      <div className='imgDiv' />
      <h3>Página no encontrada</h3>
      <Link to='/' className='redirectToHome'>Volver al Inicio</Link>
    </section>
  )
}
