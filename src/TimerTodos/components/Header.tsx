import Button from '../../Adv/components/Button'
import { useTimersContext } from '../store/timers-context'
export default function Header() {
  const timersCtx = useTimersContext()

  function handleClick() {
    if (timersCtx.isRunning) {
      timersCtx.stopTimers()
    } else {
      timersCtx.startTimers()
    }
  }
  return (
    <header>
      <h1>ReactTimer</h1>
      <Button onClick={handleClick}>
        {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
      </Button>
    </header>
  )
}
