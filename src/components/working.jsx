import { Link } from 'react-router-dom'
import DashboardLayout from '../../layout/DashboardLayout'

export default function Working () {
  return (
    <DashboardLayout>
      <div className='WorkingDiv'>
        <h2>Lo sentimos, esta página aún no se encuentra disponible</h2>
        <p>Lamentamos las molestias, esta página pronto estará disponible</p>
        <Link className='workingBtn' to='/dashboard'>Volver al Inicio</Link>
      </div>
    </DashboardLayout>
  )
}
