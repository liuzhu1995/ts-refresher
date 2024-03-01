import { type PropsWithChildren, type ReactNode } from "react"

type HeaderProps = {
  image: {
    src: string
    alt: string
  }
  children: ReactNode
}

type HeaderWithProps = PropsWithChildren<{
  image: {
    src: string
    alt: string
  }
}>
export default function Headr({ image, children }: HeaderProps) {
  return (
    <header className="header">
      <img {...image} style={{ width: "50px", height: "50px" }} />
      {children}
    </header>
  )
}
