import { type ReactNode, createContext, useContext, useReducer } from 'react'

export type Timer = {
  id: string
  name: string
  duration: number
}

type TimersState = {
  isRunning: boolean
  timers: Timer[]
}
const initialState: TimersState = {
  isRunning: false,
  timers: [],
}

type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}

type TimersContextProviderProps = {
  children: ReactNode
}

export const TimersContext = createContext<TimersContextValue | null>(null)

export function useTimersContext() {
  const timersCtx = useContext(TimersContext)

  if (timersCtx === null) {
    throw new Error('TimersContext is null')
  }
  return timersCtx
}

type AddTimerAction = {
  type: 'ADD_TIMER'
  payload: Timer
}

type StartTimersAction = {
  type: 'START_TIMERS'
}

type StopTimersAction = {
  type: 'STOP_TIMERS'
}
type Action = AddTimerAction | StartTimersAction | StopTimersAction

function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === 'ADD_TIMER') {
    const { id, name, duration } = action.payload
    return {
      ...state,
      timers: [...state.timers, { id, name, duration }],
    }
  }
  if (action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true,
    }
  }
  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false,
    }
  }

  throw state
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const theme: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData: Timer) {
      dispatch({ type: 'ADD_TIMER', payload: timerData })
    },
    startTimers() {
      console.log('start')

      dispatch({ type: 'START_TIMERS' })
    },
    stopTimers() {
      console.log('stop')
      dispatch({ type: 'STOP_TIMERS' })
    },
  }

  return (
    <TimersContext.Provider value={theme}>
      {children} <p>{timersState.timers.length}</p>
    </TimersContext.Provider>
  )
}
