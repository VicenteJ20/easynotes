import { MdDelete } from 'react-icons/md'

export const NoteCard = ({ data, onClick, load }) => {
  if (load) {
    return <p>Loading</p>
  }

  return (
    <div className='NoteCard' style={{ backgroundColor: data.backgroundColor }}>
      <button onClick={onClick} className='deleteNote'><MdDelete /></button>
      <h3>{data.titleSet}</h3>
      <p className='descriptionNoteCard'>{data.description}</p>
    </div>
  )
}
