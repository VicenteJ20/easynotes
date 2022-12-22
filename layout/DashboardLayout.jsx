import { FaConciergeBell, FaHome, FaStickyNote, FaTrash, FaUser } from 'react-icons/fa'
import { IoLogOut, IoSettingsSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../src/context/UserProvider'
import '../src/styles/DashboardLayout.css'

export default function DashboardLayout ({ children }) {
  const { user, signOutUser } = useContext(UserContext)

  const handleLogout = async () => {
    try {
      await signOutUser()
    } catch (error) {
      console.log(error.code)
    }
  }
  return (
    <section className='DashboardLayout'>
      <div className='sidebardLayout'>
        <header>
          <h1>Easy<span className='color-brand'>Notes</span></h1>
        </header>
        <ul>
          <li><Link to='/dashboard'><FaHome /> Inicio</Link></li>
          <li><Link to='/dashboard/notes'><FaStickyNote /> Notas</Link></li>
          <li><Link to='/dashboard/reminders'><FaConciergeBell /> Recordatorios</Link></li>
          <li><Link to='/dashboard/trash'><FaTrash /> Papelera</Link></li>
          <li><Link to='/dashboard/settings'><IoSettingsSharp /> Ajustes</Link></li>
        </ul>
        <div className='userDataDashboard'>
          <img src={user.photoURL !== null ? user.photoURL : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fcf%2F51%2F9e%2Fcf519ea4e64093509319e9241f788bba--free-opening-operating-system.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=cff19627d4ca4162e74e445c713014c2400bb0cf71f3962fc8d5da19030a74ba&ipo=images'} />
          <h3>{user.displayName !== null ? user.displayName : 'Usuario'}</h3>
          <p>{user.email}</p>
          <div className='btnsDataDashboard'>
            <Link to='/dashboard/settings' className='btnDashboardNav'><IoSettingsSharp className='settings' /></Link>
            <Link to='/dashboard/profile' className='btnDashboardNav'><FaUser className='fauser' /></Link>
            <button onClick={handleLogout} className='btnDashboardNav'><IoLogOut className='logout' /></button>
          </div>
        </div>
      </div>
      <div className='childrenLayout'>
        {children}
      </div>
    </section>
  )
}
