import HomeLayout from './HomeLayout'
import homeImg from '../../assets/homeImg.png'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'

export default function Home () {
  return (
    <HomeLayout>
      <section className='Home'>
        <div className='textHome'>
          <h1>Organízate en todo momento y lugar.<br /><span>El límite lo pones tú.</span></h1>
          <p>Crea notas, recibe notificaciones, agenda reservaciones y obtén acceso en cualquiera de tus dispositivos con nuestro servicio basado en la nube.</p>
          <Link to='/login' className='loginBtn'>Acceder</Link>
        </div>
        <div className='imgDivHome'>
          <img src={homeImg} />
        </div>
      </section>
    </HomeLayout>
  )
}
