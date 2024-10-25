import type { RefObject } from "react"

const ADJUSTMENT = 5

type SeekPlayerTimeProps = {
  videoRef: RefObject<HTMLVideoElement | null>
  direction: "ArrowLeft" | "ArrowRight"
}

function seekPlayerTime(props: SeekPlayerTimeProps) {
  const { videoRef, direction } = props

  if (!videoRef.current) return

  if (direction === "ArrowLeft") {
    videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - ADJUSTMENT)
  }

  if (direction === "ArrowRight") {
    videoRef.current.currentTime = Math.min(
      videoRef.current.duration,
      videoRef.current.currentTime + ADJUSTMENT,
    )
  }
}

export { seekPlayerTime }
