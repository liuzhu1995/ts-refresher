import { type PropsWithChildren, type FC, type ReactNode } from "react"
import { type CourseGoal } from "../index"
type CourseProps = CourseGoal & {
  children?: ReactNode
  onDelete: (id: string) => void
}

type CourseWithProps = PropsWithChildren<
  CourseGoal & { onDelete: (id: string) => void }
>

const CourseGoal: FC<CourseWithProps> = ({ id, title, onDelete, children }) => {
  return (
    <article className="goal-item">
      <div className="goal-content">
        <div className="goal-head">
          <p className="goal-title">{title}</p>
          <button className="goal-delete" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
        {children}
      </div>
    </article>
  )
}
export default CourseGoal
// export default function CourseGoal({ title, children }: CourseProps) {
//   return (
//     <article>
//       <div>
//         <p>{title}</p>
//       </div>
//       {children}
//     </article>
//   )
// }
