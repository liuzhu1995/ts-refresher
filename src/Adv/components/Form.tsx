import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

export type FormHandle = {
  clear: () => void
  print: () => void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}
const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref
) {
  const formRef = useRef<HTMLFormElement>(null)
  useImperativeHandle(
    ref,
    () => {
      return {
        clear() {
          console.log('clear')
          formRef.current?.reset()
        },
        print() {
          console.log('print')
        },
      }
    },
    []
  )
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    onSave(data)
  }
  return (
    <form ref={formRef} {...otherProps} onSubmit={handleSubmit}>
      {children}
    </form>
  )
})

export default Form
