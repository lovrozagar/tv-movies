import { cn } from "@/utils"
import type { ReactNode } from "react"

type BackdropFrontContentProps = {
  children: ReactNode
  className?: string
}

const BackdropFrontContent = (props: BackdropFrontContentProps) => {
  const { className, children } = props

  return <div className={cn("relative z-[2] px-4", className)}>{children}</div>
}

export { BackdropFrontContent }
