import { Main } from "@/components/main"
import { useDocumentTitle } from "@/hooks/local"
import { useMovieDetailsQuery } from "@/hooks/query"
import { Button } from "@/modules/focusable"
import { useVideoPlayer } from "@/screens/player/hooks/useVideoPlayer"
import { getControlItems } from "@/screens/player/utils/getControlItems"
import { getRandomPlayerVideoSource } from "@/screens/player/utils/getRandomPlayerVideoSource"
import { getImageSource } from "@/utils"
import { useParams } from "react-router-dom"

const src = getRandomPlayerVideoSource()

const PlayerScreen = () => {
  useDocumentTitle({ title: "Player" })

  const { movieIdParam } = useParams()

  const movieId = Number.parseInt(movieIdParam ?? "")

  const response = useMovieDetailsQuery({ movieId })

  const player = useVideoPlayer({ src })

  return (
    <Main className="relative flex-1 flex-col items-center justify-center pb-0">
      <ul className="my-1 flex flex-wrap justify-center gap-x-1">
        {getControlItems(player).map((item, index) => (
          <Button
            key={index}
            className="flex min-w-fit flex-1 items-center justify-center gap-x-3 bg-mode-900 px-4 py-2"
            onPress={item.onPress}
          >
            {item.name}
            <item.Icon className="size-6" />
          </Button>
        ))}
      </ul>
      <video
        ref={player.videoRef}
        onEnded={player.handleEnded}
        preload="metadata"
        className="h-auto w-full"
        poster={getImageSource({ path: response.data?.backdrop_path ?? "", size: "original" })}
        onClick={player.togglePlay}
      >
        <track kind="captions" />
      </video>
    </Main>
  )
}

export { PlayerScreen }
