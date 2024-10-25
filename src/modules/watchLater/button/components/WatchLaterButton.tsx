import { Button } from "@/modules/focusable"
import { useWatchLaterStore } from "@/stores"
import clsx from "clsx"
import type { ReactNode } from "react"

type WatchLaterButtonProps = {
  children: (props: { isSaved: boolean }) => ReactNode
  movieId: number
  className?: string
}

const WatchLaterButton = (props: WatchLaterButtonProps) => {
  const { children, movieId, className } = props

  const movieIds = useWatchLaterStore((store) => store.movieIds)
  const toggleMovieId = useWatchLaterStore((store) => store.toggleMovieId)

  const isSaved = movieIds?.includes(movieId)

  return (
    <Button
      className={clsx(
        "mt-4 xs:mt-0 ml-0 xs:ml-4 flex min-h-[50px] flex-1 items-center justify-center gap-x-2 rounded-lg bg-mode font-medium text-foreground shadow-md dark:bg-mode-950",
        className,
      )}
      disabledArrows={["right"]}
      onPress={() => toggleMovieId(movieId)}
    >
      {typeof children === "function" ? children({ isSaved }) : children}
    </Button>
  )
}

export { WatchLaterButton }
