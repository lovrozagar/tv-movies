import type { Dispatch, RefObject, SetStateAction } from "react"

const ADJUSTMENT = 5

type TogglePlayerPlayProps = {
  videoRef: RefObject<HTMLVideoElement | null>
  setPlay: Dispatch<SetStateAction<boolean>>
}

function togglePlayerPlay(props: TogglePlayerPlayProps) {
  const { videoRef, setPlay } = props

  if (!videoRef.current) return

  const player = videoRef.current

  setPlay((prev) => {
    if (prev) {
      player.pause()
    } else {
      player.play()
    }

    return !prev
  })
}

export { togglePlayerPlay }
