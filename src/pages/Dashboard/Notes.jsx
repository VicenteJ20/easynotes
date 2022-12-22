import { BsPlusLg } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../../layout/DashboardLayout'
import AddNote from '../../components/AddNote'
import InternalLoader from '../../components/InternalLoader'
import { useFirestore } from '../../hooks/useFirestore'
export default function Notes () {
  const { data, error, loading } = useFirestore()

  if (loading) return <DashboardLayout><InternalLoader /></DashboardLayout>
  else if (error) return <p>error</p>

  return (
    <DashboardLayout>
      <AddNote />
      <header className='DashboardHeader'>
        <div className='infoDivHeader'>
          <h2 className='titleChildren'>Todas las notas</h2>
        </div>
        <div className='actionDivHeader'>
          <Link to='/dashboard/notifications' className='notificationsLink'><FaBell /></Link>
          <button className='btnNewNote'><BsPlusLg /> Nueva nota</button>
        </div>
      </header>
      <section className='DashboardContentSection'>
        {
          data.map((x, index) => (
            <div key={index}>
              <p>{x.Title}</p>
              <p>{x.Description}</p>
              <p>{x.CreatedAt}</p>
              <p>{x.ModifiedAt}</p>
              <p>{x.color}</p>
              <p>{x.uid}</p>
            </div>
          ))
        }
      </section>
    </DashboardLayout>
  )
}
