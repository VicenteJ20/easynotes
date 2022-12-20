import * as yup from 'yup'

export const signupSchema = yup.object().shape({
  username: yup.string().min(3, 'El nombre debe ser de al menos 3 carácteres de longitud').required('Requerido'),
  email: yup.string().email('Debe ingresar un email válido').required('Requerido').required('Requerido'),
  password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Debe ingresar una contraseña válida').min(8, 'Mínimo 8 carácteres').required('Requerido')
})
