import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Debe ingresar un email válido').required('Requerido').required('Requerido'),
  password: yup.string().required('Requerido')
})
