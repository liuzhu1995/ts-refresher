import AddTimer from './components/AddTimer'
import Header from './components/Header'
import Timers from './components/Timers'
import TimersContextProvider from './store/timers-context'

export default function TimerTodos() {
  return (
    <TimersContextProvider>
      <Header></Header>
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  )
}
