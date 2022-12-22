import { Navbar } from '../src/components/Navbar'
import '../src/styles/HomeLayout.css'

export default function HomeLayout ({ children }) {
  return (
    <section className='HomeLayout'>
      <Navbar />
      <div className='childrenDiv'>
        {children}
      </div>
    </section>
  )
}
