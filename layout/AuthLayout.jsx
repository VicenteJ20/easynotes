import { Link } from 'react-router-dom'
import '../src/styles/AuthLayout.css'

export default function AuthLayout ({ children }) {
  return (
    <section className='AuthLayout'>
      <div className='childrenDiv'>
        <header className='headerChildren'><Link to='/'>Easy<span className='colorBrand'>Notes</span></Link></header>
        {children}
      </div>
      <div className='staticDiv' />
    </section>
  )
}
