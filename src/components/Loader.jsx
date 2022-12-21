import '../styles/Loader.css'

export default function Loader () {
  return (
    <>
      <div className='Loader'>
        <div className='loader-ring'>
          <div className='lds-ring'><div /><div /><div /><div /></div>
        </div>
        <div className='info-loader'>
          <h3>Cargando, por favor espere....</h3>
        </div>
      </div>
    </>
  )
}
