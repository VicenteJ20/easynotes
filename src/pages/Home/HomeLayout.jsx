import { Navbar } from '../../components/Navbar'
import '../../styles/HomeLayout.css'

export default function HomeLayout ({ children }) {
  return (
    <section className='HomeLayout'>
      <Navbar />
      {children}
    </section>
  )
}
