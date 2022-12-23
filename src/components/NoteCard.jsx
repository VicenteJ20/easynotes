import { MdDelete } from 'react-icons/md'
import Loader from './InternalLoader'

export const NoteCard = ({ data, onClick, load, onClickDiv }) => {
  if (load) {
    return <Loader />
  }

  return (
    <div onClick={onClickDiv} className='NoteCard' style={{ backgroundColor: data.backgroundColor }}>
      <button onClick={onClick} className='deleteNote'><MdDelete /></button>
      <h3>{data.titleSet}</h3>
      <p className='descriptionNoteCard'>{data.description}</p>
    </div>
  )
}
