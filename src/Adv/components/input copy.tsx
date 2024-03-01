import { ComponentPropsWithoutRef } from 'react'

type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>
export default function Input({ id, label, ...props }: InputProps) {
  return (
    <p className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input id={id} type='text' className='form-control' {...props} />
    </p>
  )
}
