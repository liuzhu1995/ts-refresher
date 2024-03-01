import { type ReactNode } from "react"

type HintBoxProps = {
  mode: "hint"
  severity?: "low" | "medium" | "high"
  children: ReactNode
}
type WarningBoxProps = {
  mode: "warning"
  severity: "low" | "medium" | "high"
  children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox(props: InfoBoxProps) {
  // Info,warning
  const { mode, children } = props
  if (mode === "hint") {
    return (
      <aside className="card text-bg-primary">
        <div className="card-body">
          <div>{children}</div>
        </div>
      </aside>
    )
  }
  return (
    <aside className={`card text-bg-danger ${props.severity}`}>
      <div className="card-body">
        <h2>Warning</h2>
        <div>{children}</div>
      </div>
    </aside>
  )
}
