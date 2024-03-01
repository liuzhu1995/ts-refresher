import Button from '../../Adv/components/Button'
import Form from '../UI/Form'
import Input from '../../Adv/components/input'
import { useRef } from 'react'
import { FormHandle } from '../UI/Form'
import { useTimersContext } from '../store/timers-context'

export default function AddTimer() {
  const { addTimer } = useTimersContext()
  const formRef = useRef<FormHandle>(null)
  function handleSaveTimer(data: unknown) {
    const { name, duration } = data as {
      name: string
      duration: string
    }

    if (name !== '' && +duration > 0) {
      addTimer({ name, duration: +duration, id: crypto.randomUUID() })
      formRef.current?.clear()
    }
  }
  return (
    <Form ref={formRef} onSave={handleSaveTimer}>
      <Input type='text' id='name' label='Name' />
      <Input type='number' id='duration' label='Duration' min={0} />
      <Button>ADD</Button>
    </Form>
  )
}
