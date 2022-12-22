import { BsPlusLg } from 'react-icons/bs'
import { FaBell, FaFont, FaSave } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../../layout/DashboardLayout'
import InternalLoader from '../../components/InternalLoader'
import { useFirestore } from '../../hooks/useFirestore'
import { useState } from 'react'
import '../../styles/AddNote.css'
import { TwitterPicker } from 'react-color'
import { IoColorPalette } from 'react-icons/io5'
import { FiAlignJustify } from 'react-icons/fi'

export default function Notes () {
  const { data, error, loading } = useFirestore()
  const [show, setShow] = useState(false)
  const [showColor, setShowColor] = useState(false)
  const [font, setFont] = useState('Poppins')
  const [color, setColor] = useState('#fcb900')
  const [align, setAlign] = useState('left')

  if (loading) return <DashboardLayout><InternalLoader /></DashboardLayout>
  else if (error) return <p>error</p>

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    setShow(!show)
  }

  const handleCloseClick = () => {
    setShow(!show)
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
    console.log(color.hex)
  }

  const handleAlign = (e) => {
    const val = e.target.value
    setAlign(val)
  }

  console.log(align)

  return (
    <DashboardLayout>
      <section className={`formParent ${show ? 'visible' : 'hidden'}`}>
        <form className='addNoteForm' onSubmit={handleSubmit} style={{ backgroundColor: color }}>
          <div className='btnsHeader'>
            <button className='saveNote'><FaSave /> Guardar</button>
            <button className='closeButtonNote' onClick={handleCloseClick} type='button'><VscChromeClose /> </button>
          </div>
          <div className='formDiv' style={{ fontFamily: `${font}, sans-serif` }}>
            <input className='inputDivTitle' type='text' name='title' id='title' placeholder='Nueva Nota' required />
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
                    <option defaultValue='left'>Izquierda</option>
                    <option value='center'>Centro</option>
                    <option value='right'>Derecha</option>
                    <option value='justify'>Justificado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='formTextArea' style={{ fontFamily: `${font}, sans-serif` }}>
            <textarea className='inputTextArea' onKeyDown={(e) => !e.keycode === 13} type='text' name='description' id='description' placeholder='Escriba un mensaje aquí' required />
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
          data.map((x, index) => (
            <div key={index}>
              <p>{x.Title}</p>
              <p>{x.Description}</p>
              <p>{x.CreatedAt}</p>
              <p>{x.ModifiedAt}</p>
              <p>{x.color}</p>
              <p>{x.uid}</p>
            </div>
          ))
        }
      </section>
    </DashboardLayout>
  )
}
