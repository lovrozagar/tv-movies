import { BackdropFrontContent } from "@/modules/backdrop/components/BackdropFrontContent"
import { BackdropImage } from "@/modules/backdrop/components/BackdropImage"
import { BackdropMask } from "@/modules/backdrop/components/BackdropMask"
import { cn } from "@/utils"
import type { ReactNode } from "react"

type BackdropProps = {
  className: string
  children: ReactNode
}

const Backdrop = (props: BackdropProps) => {
  const { className, children } = props

  return <section className={cn("relative w-full overflow-hidden", className)}>{children}</section>
}

export { Backdrop }

Backdrop.Image = BackdropImage
Backdrop.Mask = BackdropMask
Backdrop.FrontContent = BackdropFrontContent
