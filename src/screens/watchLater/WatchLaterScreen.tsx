import { Empty } from "@/components/empty"
import { Main } from "@/components/main"
import { useDocumentTitle } from "@/hooks/local"
import { Track } from "@/modules/track"
import { WatchLaterListItem } from "@/screens/watchLater/components/WatchLaterListItem"
import { useWatchLaterStore } from "@/stores"

const WatchLaterScreen = () => {
  useDocumentTitle({ title: "Watch later" })

  const movieIds = useWatchLaterStore((store) => store.movieIds)

  return (
    <Main className="pt-6">
      {movieIds.length === 0 ? (
        <Empty description="Movies that you mark as watch later will appear here." />
      ) : (
        <Track.Section type="wrap">
          <Track.Heading>Watch later</Track.Heading>
          <Track.List type="wrap">
            {movieIds.map((movieId, index) => (
              <WatchLaterListItem key={movieId} movieId={movieId} autoFocus={index === 0} />
            ))}
          </Track.List>
        </Track.Section>
      )}
    </Main>
  )
}

export { WatchLaterScreen }
