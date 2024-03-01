import Input from './components/input'
import Button from './components/Button'
import Container from './components/Container'
import Form, { type FormHandle } from './components/Form'
import { useRef } from 'react'
export default function UI() {
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<FormHandle>(null)
  function handleClick() {
    console.log('click', inputRef.current!.value)
  }
  function handleSave(value: unknown) {
    const extractedData = value as {
      name: string
      age: string
    }
    console.log(extractedData)

    formRef.current?.clear()
    formRef.current?.print()
  }
  return (
    <main>
      <Form ref={formRef} onSave={handleSave}>
        <Input id='name' label='名称' type='text' />
        <Input id='age' label='年龄' type='number' />
        <Button>Save</Button>
      </Form>
      <Input id='age' label='年龄' type='number' ref={inputRef} />
      <Button>A Button</Button>
      <Button href='https://www.baidu.com' target='_blank'>
        A Link
      </Button>
      <Container as={Button} onClick={handleClick}>
        Click
      </Container>
    </main>
  )
}
