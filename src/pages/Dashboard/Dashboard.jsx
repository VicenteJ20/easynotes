/* eslint-disable react/jsx-indent */
import DashboardLayout from '../../../layout/DashboardLayout'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserProvider'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { BsEyeFill } from 'react-icons/bs'
import '../../styles/Dashboard.css'
import { HeaderDashboardCard } from '../../components/headerDashboardCard'
import { useFirestore } from '../../hooks/useFirestore'

export default function Dashboard () {
  const { user } = useContext(UserContext)
  const { data, getData } = useFirestore()

  useEffect(() => {
    getData()
  }, [])

  return (
    <DashboardLayout>
      <header className='DashboardHeader'>
        <div className='infoDivHeader'>
          <h2 className='titleChildren'>Menú Principal</h2>
          <p className='subtitleChildren'>Bienvenido de nuevo {user.displayName !== null ? user.displayName : 'Usuario'}</p>
        </div>
        <div className='actionDivHeader'>
          <Link to='/dashboard/notifications' className='notificationsLink'><FaBell /></Link>
          <Link to='/dashboard/notes' className='btnNewNote'><BsEyeFill /> Ver todas las notas</Link>
        </div>
      </header>
      <div className='DashboardImportant'>
        {
          user.emailVerified ? '' : <HeaderDashboardCard title='Atención ¡No has verificado tu Email' cant='Verificar email' message='Si no ha verificado su cuenta dentro del 30 días su cuenta será desactivada, revise su correo electrónico' bgColor='var(--danger-note)' />
        }
        <HeaderDashboardCard title='Notas creadas' cant={data.length} message={`Has creado ${data.length} notas gracias por usar nuestro servicio`} bgColor='var(--green-note)' />
        <HeaderDashboardCard title='Por hacer hoy' cant='Sin pendientes' message='No tienes ningún pendiente para el día de hoy, ¡Disfruta tu día!' bgColor='#FFAD62' />
      </div>
      <div className='DashboardRecentNotes'>
        <div className='headerRecent'>
          <h2 className='titleChildren'>Notas recientes</h2>
        </div>
        <div className='recentNotes'>
          {
            data.map((x, index) => index <= 2
              ? <div className='recentNoteCard' key={x.id} style={{ backgroundColor: x.backgroundColor }}>
                  <h3>{x.titleSet}</h3>
                  <p>{x.description}</p>
                </div>
              : '')
          }
        </div>
      </div>
    </DashboardLayout>
  )
}
