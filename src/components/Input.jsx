import { useField } from 'formik'

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label className='label-form'>{label}</label>
      <input {...field} {...props} className={`input-form ${meta.touched && meta.error ? 'input-error' : ''}`} />
      {meta.touched && meta.error && <span className='error'>{meta.error}</span>}
    </>
  )
}
