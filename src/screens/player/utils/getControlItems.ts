import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EnterFullScreen,
  MinusIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
} from "@/components/icon"
import type { UseVideoPlayerReturn } from "@/screens/player/hooks/useVideoPlayer"

function getControlItems(player: UseVideoPlayerReturn) {
  return [
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
}

export { getControlItems }
