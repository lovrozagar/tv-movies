import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EnterFullScreen,
  MinusIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
} from "@/components/icon"
import { Main } from "@/components/main"
import { useDocumentTitle } from "@/hooks/local"
import { useMovieDetailsQuery } from "@/hooks/query"
import { Button } from "@/modules/focusable"
import { useVideoPlayer } from "@/screens/player/hooks/useVideoPlayer"
import { getImageSource } from "@/utils"
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import { useParams } from "react-router-dom"

const videoSources = [
  // "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  // "https://test-streams.mux.dev/x36xhzz/url_6/193039199_mp4_h264_aac_hq_7.m3u8",
  // "https://test-streams.mux.dev/test_001/stream.m3u8",
  // "https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",
  "https://test-streams.mux.dev/pts_shift/master.m3u8",
  // "https://test-streams.mux.dev/tos_ismc/main.m3u8",
]

function getRandomVideoSource() {
  return videoSources[Math.floor(Math.random() * videoSources.length)]
}

const src = getRandomVideoSource()

const PlayerScreen = () => {
  useDocumentTitle({ title: "Player" })

  const { movieIdParam } = useParams()

  const movieId = Number.parseInt(movieIdParam ?? "")

  const response = useMovieDetailsQuery({ movieId })

  const player = useVideoPlayer({ src })

  const CONTROL_ITEMS = [
    {
      name: "Volume down",
      Icon: MinusIcon,
      onPress: player.handleVolumeDown,
    },
    {
      name: "Volume up",
      Icon: PlusIcon,
      onPress: player.handleVolumeUp,
    },
    {
      name: player.play ? "Pause" : "Play",
      Icon: player.play ? PauseIcon : PlayIcon,
      onPress: player.togglePlay,
    },
    {
      name: "Skip back",
      Icon: ChevronLeftIcon,
      onPress: player.handleSeekBack,
    },
    {
      name: "Skip",
      Icon: ChevronRightIcon,
      onPress: player.handleSeekForward,
    },
    {
      name: "Fullscreen",
      Icon: EnterFullScreen,
      onPress: player.handleFullscreen,
    },
  ]
  return (
    <Main className="relative flex-1 flex-col items-center justify-center pb-0">
      <ul className="my-1 flex flex-wrap justify-center gap-x-1">
        {CONTROL_ITEMS.map((item, index) => (
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
