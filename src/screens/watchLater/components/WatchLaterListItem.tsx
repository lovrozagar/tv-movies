import { BookmarkFilledIcon, BookmarkIcon } from "@/components/icon"
import { Skeleton } from "@/components/skeleton"
import { useMovieDetailsQuery } from "@/hooks/query"
import { Track } from "@/modules/track"
import { WatchLaterButton } from "@/modules/watchLater/button/components/WatchLaterButton"

type WatchLaterListItemProps = {
  movieId: number
  autoFocus: boolean
}

const WatchLaterListItem = (props: WatchLaterListItemProps) => {
  const { movieId, autoFocus } = props

  const response = useMovieDetailsQuery({ movieId })

  if (response.isLoading) {
    return <Skeleton />
  }

  if (!response.data) return null

  return (
    <div className="flex flex-col gap-y-2">
      <Track.ListItem type="wrap" result={response.data} autoFocus={autoFocus} />
      <WatchLaterButton
        className="xs:ml-0 min-h-[40px] rounded bg-mode-900 dark:bg-mode-900"
        movieId={movieId}
      >
        {({ isSaved }) =>
          isSaved ? <BookmarkFilledIcon className="size-5" /> : <BookmarkIcon className="size-5" />
        }
      </WatchLaterButton>
    </div>
  )
}

export { WatchLaterListItem }
