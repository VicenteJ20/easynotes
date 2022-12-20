import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Form, Formik } from 'formik'
import { loginSchema } from '../schemas/login'
import { Input } from '../components/Input'
import AuthLayout from '../../layout/AuthLayout'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { loginUser } = useContext(UserContext)

  const onSubmit = async (values) => {
    try {
      await loginUser(values.email, values.password)
      console.log('Usuario logueado')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <AuthLayout>
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
