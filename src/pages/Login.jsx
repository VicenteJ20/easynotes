import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { Form, Formik } from 'formik'
import { loginSchema } from '../schemas/login'
import { Input } from '../components/Input'
import AuthLayout from '../../layout/AuthLayout'
import { Link } from 'react-router-dom'
import AuthMessage from '../components/AuthMessage'
import Loader from '../components/Loader'
import { auth } from '../../firebase'

export const Login = () => {
  const { loginUser, user } = useContext(UserContext)
  const [showMessage, setShowMessage] = useState({})

  if (user === undefined) {
    return <Loader />
  }

  if (auth.currentUser !== null) {
    window.location.href = '/dashboard'
  }

  const onSubmit = async (values) => {
    try {
      await loginUser(values.email, values.password)
      window.location.href = '/dashboard'
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setShowMessage({ title: 'El email o la contraseña es incorrecto', message: 'Revise sus credendiales o cree una nueva cuenta con su correo electrónico', type: 'danger' })
      }
    }
  }

  return (
    <>
      <AuthLayout>
        <AuthMessage data={showMessage} />
        <section className='Form-section'>
          <header className='header-form'>
            <h2>Iniciar sesión</h2>
          </header>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='form' autoComplete='off'>
                <div className='form-div emaildiv'>
                  <Input label='Correo electrónico' name='email' type='email' placeholder='Ingrese su correo electrónico' />
                </div>
                <div className='form-div passwordDiv'>
                  <Input label='Contraseña' name='password' type='password' placeholder='Ingrese su contraseña' />
                </div>
                <div className='button-div'>
                  <button className='btn submit-btn' disabled={isSubmitting} type='submit'>Iniciar sesión</button>
                </div>
              </Form>
            )}
          </Formik>
          <div className='signed-div'>
            <p>¿Aún no tienes una cuenta? - <Link to='/signup'>Regístrate</Link></p>
          </div>
        </section>
      </AuthLayout>
    </>
  )
}
