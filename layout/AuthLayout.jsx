import '../src/styles/AuthLayout.css'

export default function AuthLayout ({ children }) {
  return (
    <section className='AuthLayout'>
      <div className='childrenDiv'>
        <header className='headerChildren'>Easy<span className='colorBrand'>Notes</span></header>
        {children}
      </div>
      <div className='staticDiv' />
    </section>
  )
}
