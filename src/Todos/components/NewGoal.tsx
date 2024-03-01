import { useRef, type FormEvent } from "react"

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}
export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const intervalRef = useRef(0)
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    if (enteredGoal !== "" || enteredSummary !== "") {
      onAddGoal(enteredGoal, enteredSummary)
    }

    event.currentTarget.reset()
  }
  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <p className="mb-3">
        <label className="form-label" htmlFor="goal">
          Your goal
        </label>
        <input id="goal" className="form-control" type="text" ref={goal} />
      </p>
      <p className="mb-3">
        <label className="form-label" htmlFor="summary">
          Short summary
        </label>
        <input
          id="summary"
          className="form-control"
          type="text"
          ref={summary}
        />
      </p>
      <p className="mb-3">
        <button type="submit" className="btn btn-primary">
          Add Goal
        </button>
      </p>
    </form>
  )
}
