import '../styles/AuthMessage.css'

export default function AuthMessage ({ data }) {
  return (
    <div className='AuthMessageContainer'>
      <div className={`AuthMessage ${Object.keys(data).length === 0 ? 'noMessage' : ''} ${data.type}`}>
        <div className='text'>
          <h3>{data.title}</h3>
          <p>{data.message}</p>
        </div>
      </div>
    </div>
  )
}
