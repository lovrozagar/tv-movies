import { PlayIcon } from "@/components/icon"
import { Link } from "@/modules/focusable"
import { getNavigationPath } from "@/utils"

type PlayNowLinkProps = {
  movieId: number
}

const PlayNowLink = (props: PlayNowLinkProps) => {
  const { movieId } = props

  return (
    <Link
      autoFocus
      to={getNavigationPath(`/movie/${movieId}/player`)}
      className="flex min-h-[50px] flex-1 items-center justify-center gap-x-2 rounded-lg bg-primary font-medium text-primary-foreground shadow-md hover:text-primary-foreground"
      disabledArrows={["left"]}
    >
      Play now
      <PlayIcon className="size-[24px]" />
    </Link>
  )
}

export { PlayNowLink }
