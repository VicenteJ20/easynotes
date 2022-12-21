
export default function DashboardLayout({ children }){
  return (
    <section className='DashboardLayout'>
      <div className='sidebardLayout'>
        <header>
          <h1>Easy<span className="color-brand">Note</span></h1>
        </header>
      </div>
      <div className='childrenLayout'>
        {children}
      </div>
    </section>
  )
}
