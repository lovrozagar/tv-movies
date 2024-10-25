import { noop } from "@/utils"
import type { RefObject } from "react"

type TogglePlayerFullscreenProps = {
  videoRef: RefObject<HTMLVideoElement | null>
}

function togglePlayerFullscreen(props: TogglePlayerFullscreenProps) {
  const { videoRef } = props

  if (!videoRef.current) return

  if (document.fullscreenElement) {
    document.exitFullscreen()
    return
  }

  videoRef.current.requestFullscreen().catch(noop)
}

export { togglePlayerFullscreen }
