import HomeLayout from '../../../layout/HomeLayout'
import homeImg from '../../assets/homeImg.png'
import { Link } from 'react-router-dom'
import jsonData from '../../../json/whatCanIdo.json'
import '../../styles/Home.css'
import { FeatureCard } from '../../components/whacanidoCard'
import { FaCheckSquare, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Home () {
  return (
    <HomeLayout>
      <section className='Home'>
        <section className='HomeSection'>
          <div className='textHome'>
            <h1>Organízate en todo momento y lugar.<br /><span>El límite lo pones tú.</span></h1>
            <p>Crea notas, recibe notificaciones, agenda reservaciones y obtén acceso en cualquiera de tus dispositivos con nuestro servicio basado en la nube.</p>
            <Link to='/login' className='loginBtn'>Acceder</Link>
          </div>
          <div className='imgDivHome'>
            <img src={homeImg} />
          </div>
        </section>
      </section>
      <section className='whatCanIdo'>
        <header className='header'>
          <h2 className='titleHeader'>¿Qué puedo hacer con Easy<span className='color-brand'>Notes</span>?</h2>
          <p className='descriptionHeader'>Con EasyNotes puedes crear notas, recordatorios y recibir notificaciones. Utilizando nuestro servicio para organizar tu vida personal y laboral puedes sacar tu máximo potencial y disfrutar cada minuto de tu tiempo libre.</p>
        </header>
        <section className='whatCanIdoCards'>
          {
            jsonData.map((x, index) => <FeatureCard key={index} icon={x.iconName} title={x.title} description={x.description} />)
          }
        </section>
      </section>
      <section className='Subscriptions'>
        <header className='header'>
          <h2 className='titleHeader'>Planes disponibles en Easy<span className='color-brand'>Notes</span></h2>
          <p className='descriptionHeader'>¡Escoge el plan perfecto para ti!</p>
        </header>
        <div className='gridSubscription'>
          <div>
            <header>Plan básico</header>
            <div className='price'>
              <h2>FREE</h2>
              <p>Gratis para siempre<br />No se requiere tarjeta de crédito.</p>
            </div>
            <div className='middleHeader'>
              <h3>¿Qué incluye este plan?</h3>
            </div>
            <div className='ulDivSubscription'>
              <ul>
                <li><FaCheckSquare /> Crea Notas</li>
                <li><FaCheckSquare /> Crea recordatorios</li>
                <li><FaCheckSquare /> Crea alertas personalizadas</li>
                <li><FaCheckSquare /> Reserva horarios</li>
                <li><FaCheckSquare /> Soporte técnico</li>
              </ul>
            </div>
          </div>
          <div>
            <header>Plan Profesional</header>
            <div className='price'>
              <h2>$7.99 USD <span>/mes</span></h2>
              <p>Disponible en pago mensual o Anual con 10% de descuento el primero año.</p>
            </div>
            <div className='middleHeader'>
              <h3>¿Qué incluye este plan?</h3>
            </div>
            <div className='ulDivSubscription'>
              <ul>
                <li><FaCheckSquare /> Todo lo que incluye el plan básico</li>
                <li><FaCheckSquare /> Soporte 24/7</li>
                <li><FaCheckSquare /> Conecta hasta 5 dispositivos</li>
                <li><FaCheckSquare /> Papelera hasta por 7 días</li>
                <li><FaCheckSquare /> 100Mb de Almacenamiento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='Footer'>
        <div className='bannerFooter'>
          <h2>Haz crecer tus proyectos personales<br />bajo tus propias reglas</h2>
          <Link className='buttonFooter' to='/'>Registrarme</Link>
        </div>
        <div className='FullFooter'>
          <div className='FirstDiv'>
            <h3>Easy<span className='color-brand'>Notes</span></h3>
            <p>App de notas personalizable, potente y eficiente al alcance de todos.</p>
            <ul>
              <li><a href='https://www.twitter.com/jvicente_20/'><FaTwitter /></a></li>
              <li><a href='https://www.instagram.com/jvicente_20/'><FaInstagram /></a></li>
              <li><a href='https://www.facebook.com/'><FaFacebook /></a></li>
            </ul>
          </div>
          <div className='divInternalFooter'>
            <h3>Soporte</h3>
            <ul>
              <li><Link to='/'>Centro de ayuda</Link></li>
              <li><Link to='/'>Comunidad</Link></li>
              <li><Link to='/'>Legal</Link></li>
              <li><Link to='/'>Términos y condiciones</Link></li>
            </ul>
          </div>
          <div className='divInternalFooter'>
            <h3>Recursos</h3>
            <ul>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/'>Guías</Link></li>
              <li><Link to='/'>FAQ</Link></li>
              <li><Link to='/'>Tutoriales</Link></li>
            </ul>
          </div>
          <div className='divInternalFooter'>
            <h3>¿Quiénes somos?</h3>
            <ul>
              <li><Link to='/'>Sobre nosotros</Link></li>
              <li><Link to='/'>Contáctanos</Link></li>
            </ul>
          </div>
        </div>
        <footer className='FooterElement'>&copy; Copyright 2022, EasyNotes. Todos los derechos reservados.</footer>
      </section>
    </HomeLayout>
  )
}
