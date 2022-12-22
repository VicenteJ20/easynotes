export const NoteCard = ({ data }) => {
  return (
    <div className='NoteCard' style={{ backgroundColor: data.backgroundColor }}>
      <h3>{data.titleSet}</h3>
      <p className='descriptionNoteCard'>{data.description}</p>
    </div>
  )
}
