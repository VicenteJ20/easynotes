import { NavLink } from 'react-router-dom'
import '../src/styles/AuthLayout.css'

export default function AuthLayout ({ children }) {
  return (
    <section className='AuthLayout'>
      <div className='childrenAuthDiv'>
        <header className='headerChildren'>
          <NavLink to='/'>Easy<span className='colorBrand'>Notes</span></NavLink>
        </header>
        {children}
      </div>
      <div className='staticDiv' />
    </section>
  )
}
