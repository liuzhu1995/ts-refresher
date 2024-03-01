import { useTimersContext } from '../store/timers-context'
import Timer from './Timer'

export default function Timers() {
  const theme = useTimersContext()
  return (
    <ul className='grid'>
      {theme.timers.map((timer) => (
        <li key={timer.id} className='g-col-4'>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  )
}
