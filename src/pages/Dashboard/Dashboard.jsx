import DashboardLayout from '../../../layout/DashboardLayout'
import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs'
import '../../styles/Dashboard.css'

export default function Dashboard () {
  const { user } = useContext(UserContext)

  return (
    <DashboardLayout>
      <header className='DashboardHeader'>
        <div className='infoDivHeader'>
          <h2 className='titleChildren'>Menú Principal</h2>
          <p className='subtitleChildren'>Bienvenido de nuevo {user.displayName !== null ? user.displayName : 'Usuario'}</p>
        </div>
        <div className='actionDivHeader'>
          <Link to='/dashboard/notifications' className='notificationsLink'><FaBell /></Link>
          <button className='btnNewNote'><BsPlusLg /> Nueva nota</button>
        </div>
      </header>
    </DashboardLayout>
  )
}
