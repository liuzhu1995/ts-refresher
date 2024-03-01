import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../index"
import InfoBox from "./InfoBox"
import { type ReactNode } from "react"

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: string) => void
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet.Start adding some!
      </InfoBox>
    )
  }
  let warningBox: ReactNode

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You have no course goals yet.Start adding some!
      </InfoBox>
    )
  }

  return (
    <>
      {warningBox}
      <ul className="goal-list">
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal {...goal} onDelete={onDeleteGoal}>
              <div>
                course goal page children
                <p>{goal.id}</p>
              </div>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}
