import { cn } from "@/utils"
import type { ComponentPropsWithoutRef } from "react"

type MainProps = Pick<ComponentPropsWithoutRef<"main">, "className" | "style" | "children">

const Main = (props: MainProps) => {
  const { className, style, children } = props

  return (
    <main
      className={cn(
        "mx-auto w-full flex-1 px-4 pb-20 md:px-6 lg:px-8 2xl:max-w-screen-2xl",
        className,
      )}
      style={style}
    >
      {children}
    </main>
  )
}

export { Main }
