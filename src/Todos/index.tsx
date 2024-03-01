import { useState } from "react"
import Header from "./components/Header"
import headerImg from "../assets/7981.jpg"
import CourseGoalList from "./components/CourseGoalList"
import NewGoal from "./components/NewGoal"
import "./style.scss"
export type CourseGoal = {
  id: string
  title: string
  description?: string
}
export default function Todos() {
  const [goals, setGoals] = useState<Array<CourseGoal>>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal = {
        id: crypto.randomUUID(),
        title: goal,
        description: summary,
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: string) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <>
      <Header image={{ src: headerImg, alt: "顶部照片" }}>
        <h1>Your Couse Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      ></CourseGoalList>
    </>
  )
}
