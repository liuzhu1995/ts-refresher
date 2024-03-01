type ErrorMessageProps = {
  text: string
}
export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <aside>
      <h2>An error occurred</h2>
      <p>{text}</p>
    </aside>
  )
}
