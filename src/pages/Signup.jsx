import { signupSchema } from '../schemas/signup'
import { Form, Formik } from 'formik'
import { Input } from '../components/Input'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import AuthLayout from '../../layout/AuthLayout'
import { Link } from 'react-router-dom'
import AuthMessage from '../components/AuthMessage'
import { useState } from 'react'

export const Signup = () => {
  const [showMessage, setShowMessage] = useState({})

  if (auth.currentUser !== null) {
    window.location.href = '/dashboard'
  }

  const onSubmit = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password)
    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/email-already-in-use') {
        setShowMessage({ title: 'El correo ya está en uso', message: 'Diríjase al Login para iniciar sesión en su cuenta', type: 'danger', show: true })
      }
    }
  }

  return (
    <AuthLayout>
      <AuthMessage data={showMessage} />
      <section className='Form-section'>
        <header className='header-form'>
          <h2>Registro</h2>
        </header>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={signupSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='form'>
              <div className='form-div usernamediv'>
                <Input label='Nombre' name='username' type='text' placeholder='Ingrese su nombre' />
              </div>
              <div className='form-div emaildiv'>
                <Input label='Correo electrónico' name='email' type='email' placeholder='Ingrese su correo electrónico' />
              </div>
              <div className='form-div passwordDiv'>
                <Input label='Contraseña' name='password' type='password' placeholder='Ingrese una contraseña válida' />
              </div>
              <div className='button-div'>
                <p className='info-btn'>* Al enviar este formulario acepta la recopilación y utilización de la información proporcionada a través del mismo.</p>
                <button className='btn submit-btn' disabled={isSubmitting} type='submit'>Registrarse</button>
              </div>
            </Form>
          )}
        </Formik>
        <div className='signed-div'>
          <p>¿Ya tienes una cuenta? - <Link to='/login'>Iniciar sesión</Link></p>
        </div>
      </section>
    </AuthLayout>
  )
}
