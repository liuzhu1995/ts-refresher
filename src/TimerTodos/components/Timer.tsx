import { useEffect, useRef, useState } from 'react'
import Container from '../../Adv/components/Container'
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../store/timers-context'

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<NodeJS.Timeout | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const { isRunning } = useTimersContext()

  if (remainingTime <= 0 && interval.current) {
    console.log(interval.current)

    clearInterval(interval.current)
  }
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isRunning && remainingTime > 0) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => prevTime - 50)
      }, 50)
      interval.current = timer
    } else if (interval.current) {
      clearInterval(interval.current)
    }

    return () => clearInterval(timer)
  }, [isRunning, remainingTime])

  const formattedRemainingTime = remainingTime / 1000
  const formattedProgess = `${(
    (remainingTime / (duration * 1000)) *
    100
  ).toFixed(2)}%`

  return (
    <Container as='article'>
      <div className='card text-bg-primary' style={{ maxWidth: '18rem' }}>
        <div className='card-body'>
          <p className='card-title'>{name}</p>
          <p>{formattedRemainingTime}</p>
          <div
            className='progress'
            role='progressbar'
            aria-label='Info  example'
            aria-valuenow={+formattedRemainingTime}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className='progress-bar bg-info'
              style={{ width: `${formattedProgess}` }}
            >
              {formattedProgess}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
