import { BsPlusLg } from 'react-icons/bs'
import { FaBell, FaFont, FaSave } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../../layout/DashboardLayout'
import InternalLoader from '../../components/InternalLoader'
import { useFirestore } from '../../hooks/useFirestore'
import { useState, useEffect } from 'react'
import '../../styles/AddNote.css'
import { TwitterPicker } from 'react-color'
import { IoColorPalette } from 'react-icons/io5'
import { FiAlignJustify } from 'react-icons/fi'
import { MdFormatLineSpacing } from 'react-icons/md'
import { auth } from '../../../firebase'
import { NoteCard } from '../../components/NoteCard'

export default function Notes () {
  const { data, error, loading, getData, addNote, deleteData, updateData } = useFirestore()
  const [show, setShow] = useState(false)
  const [showColor, setShowColor] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDescription] = useState('')
  const [font, setFont] = useState('Poppins')
  const [color, setColor] = useState('#fcb900')
  const [align, setAlign] = useState('left')
  const [spacing, setSpacing] = useState(1.5)
  const [edit, setEdit] = useState()

  useEffect(() => {
    getData()
    deleteData()
  }, [])

  if (loading.getData) return <DashboardLayout><InternalLoader /></DashboardLayout>
  else if (error) return <p>error</p>

  const handleClick = () => {
    setShow(!show)
  }

  const handleCloseClick = () => {
    setShow(!show)
    setTitle('')
    setDescription('')
    setEdit()
    setColor('#fcb900')
    setFont('Poppins')
    setAlign('left')
    setSpacing(1.5)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleFont = (e) => {
    const val = e.target.value
    setFont(val)
  }

  const handleColor = () => {
    setShowColor(!showColor)
  }

  const handleSelectColor = (color, event) => {
    setColor(color.hex)
  }

  const handleAlign = (e) => {
    const val = e.target.value
    setAlign(val)
  }

  const handleSpacing = (e) => {
    const val = e.target.value
    setSpacing(val)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      uid: auth.currentUser.uid,
      titleSet: title,
      description: desc,
      fontSelected: font,
      backgroundColor: color,
      alignSelected: align,
      letterSpacing: spacing
    }

    if (edit !== undefined) {
      await updateData(edit, data)
      setEdit()
      setShow(false)
      console.log(edit)
      return
    }

    await addNote(data)
    setTitle('')
    setDescription('')
    setSpacing(1.5)
    setShow(false)
  }

  const handleDelete = async (id) => {
    await deleteData(id)
  }

  const handleEdit = async (data) => {
    setShow(true)
    setTitle(data.titleSet)
    setDescription(data.description)
    setColor(data.backgroundColor)
    setSpacing(data.letterSpacing)
    setAlign(data.alignSelected)
    setEdit(data.id)
  }

  return (
    <DashboardLayout>
      <section className={`formParent ${show ? 'visible' : 'hidden'}`}>
        <form className='addNoteForm' onSubmit={handleSubmit} style={{ backgroundColor: color }}>
          <div className='btnsHeader'>
            <button className='saveNote'><FaSave /> Guardar</button>
            <button className='closeButtonNote' onClick={handleCloseClick} type='button'><VscChromeClose /> </button>
          </div>
          <div className='formDiv' style={{ fontFamily: `${font}, sans-serif` }}>
            <input className='inputDivTitle' type='text' onChange={handleTitle} value={title} name='title' id='title' placeholder='Nueva Nota' required />
          </div>
          <div className='menuBarNote' style={{ fontFamily: `${font}, sans-serif` }}>
            <div className='formDiv'>
              <label htmlFor='fontSelect'><FaFont /> </label>
              <select name='fontSelect' className='selectDiv' onChange={handleFont}>
                <option defaultValue='Poppins'>Poppins</option>
                <option value='Roboto'>Roboto</option>
                <option value='Raleway'>Raleway</option>
              </select>
            </div>
            <div className='formDiv'>
              <label htmlFor='selectColor'><IoColorPalette /></label>
              <button onClick={handleColor} style={{ backgroundColor: color }} className='selectColor' type='button' />
              <div className={`colorDiv ${showColor ? 'visible' : 'hidden'}`}>
                <TwitterPicker onChangeComplete={handleSelectColor} />
              </div>
            </div>
            <div className='formDiv' style={{ fontFamily: `${font}, sans-serif` }}>
              <div className='alignButtons'>
                <div className='formDiv'>
                  <label htmlFor='alignSelect'><FiAlignJustify /> </label>
                  <select name='alignSelect' className='selectDiv' onChange={handleAlign}>
                    <option value='left'>Izquierda</option>
                    <option value='center'>Centro</option>
                    <option value='right'>Derecha</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='formDiv' style={{ fontFamily: `${font}, sans-serif` }}>
              <div className='alignButtons'>
                <div className='formDiv'>
                  <label htmlFor='alignSelect'><MdFormatLineSpacing /> </label>
                  <select name='alignSelect' className='selectDiv' onChange={handleSpacing}>
                    <option value='1.5'>1.5</option>
                    <option value='1'>1</option>
                    <option value='1.15'>1.15</option>
                    <option value='2.0'>2</option>
                    <option value='2.5'>2.5</option>
                    <option value='3.0'>3.0</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='formTextArea'>
            <textarea className='inputTextArea' value={desc} onChange={handleDescription} type='text' style={{ fontFamily: `${font}, sans-serif`, textAlign: align, lineHeight: spacing }} name='description' id='description' placeholder='Escriba un mensaje aquí' required />
          </div>
        </form>
      </section>
      <header className='DashboardHeader'>
        <div className='infoDivHeader'>
          <h2 className='titleChildren'>Todas las notas</h2>
        </div>
        <div className='actionDivHeader'>
          <Link to='/dashboard/notifications' className='notificationsLink'><FaBell /></Link>
          <button onClick={handleClick} className='btnNewNote'><BsPlusLg /> Nueva nota</button>
        </div>
      </header>
      <section className='DashboardContentSection'>
        {
          data.map((x) => (
            <NoteCard data={x} load={loading[x.id]} onClick={() => handleDelete(x.id)} onClickDiv={() => handleEdit(x)} key={x.id} />
          ))
        }
      </section>
    </DashboardLayout>
  )
}
