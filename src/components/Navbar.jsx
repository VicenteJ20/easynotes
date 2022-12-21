import '../styles/Navbar.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar () {
  const [active, setActive] = useState(false)

  const setupMenu = () => {
    setActive(!active)
  }

  return (
    <header className='header-nav'>
      <div className='brand-div'>
        <NavLink to='/'>Easy<span className='colorBrand'>Notes</span></NavLink>
      </div>
      <button className='button-mobile' onClick={setupMenu}>
        <div />
        <div />
        <div />
      </button>
      <nav className={`navtag ${active ? 'isActive' : ''}`}>
        <ul className='nav-ul'>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/'>Acerca de</NavLink></li>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/'>Características</NavLink></li>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/'>FAQ</NavLink></li>
          <li className='contact-button-li' onClick={setupMenu}>
            <NavLink to='/signup'>Registro</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
