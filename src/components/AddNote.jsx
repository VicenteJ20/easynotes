import '../styles/AddNote.css'

export default function AddNote () {
  return (
    <section className='formParent'>
      <form className='addNoteForm'>
        <div className='formDiv'>
          <label htmlFor='title'>Título:</label>
          <input className='inputDiv' type='text' name='title' id='title' placeholder='Nueva Nota' required />
        </div>
        <div className='formDiv'>
          <label htmlFor='title'>Descripción</label>
          <textarea className='inputDiv' type='text' name='description' id='description' placeholder='escriba un mensaje aquí' required />
        </div>
        <div className='formDiv'>
          <label htmlFor='title'>Color:</label>
          <input className='inputDiv' type='text' name='color' id='color' placeholder='Escriba el código de color' />
        </div>
      </form>
    </section>
  )
}
