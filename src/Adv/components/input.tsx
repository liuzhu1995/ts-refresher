import { ComponentPropsWithRef, forwardRef } from 'react'

type InputProps = {
  label: string
  id: string
} & ComponentPropsWithRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref
) {
  return (
    <p className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input
        id={id}
        name={id}
        className='form-control'
        type='text'
        {...props}
        ref={ref}
      />
    </p>
  )
})

export default Input
