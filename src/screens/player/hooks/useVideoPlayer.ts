import { useEventListener } from "@/hooks/local"
import { togglePlayerFullscreen } from "@/screens/player/utils/togglePlayerFullscreen"
import Hls from "hls.js"
import { useEffect, useRef, useState } from "react"

const KEYS = ["ArrowLeft", "ArrowRight", "f", "Escape", " ", "Enter"]

type UseVideoPlayerProps = {
  src: string
}

function useVideoPlayer(props: UseVideoPlayerProps) {
  const { src } = props

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [play, setPlay] = useState(false)
  const [volume, setVolume] = useState(1)
  const [fullscreen, setFullScreen] = useState(false)

  const handleEnded = () => setPlay(false)

  const handleVolumeDown = () => {
    if (!videoRef.current) return
    const newVolume = Math.max(0, volume - 0.1)
    setVolume(newVolume)
    videoRef.current.volume = newVolume
  }

  const handleVolumeUp = () => {
    if (!videoRef.current) return
    const newVolume = Math.min(1, volume + 0.1)
    setVolume(newVolume)
    videoRef.current.volume = newVolume
  }

  const handleSeekBack = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10)
  }

  const handleSeekForward = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime += 10
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    togglePlayerFullscreen({ videoRef })
    setFullScreen((prev) => !prev)
  }

  useEffect(() => {
    if (!Hls.isSupported() || !videoRef.current) return

    const hls = new Hls()
    hls.loadSource(src)
    hls.attachMedia(videoRef.current)

    return () => {
      hls.destroy()
    }
  }, [src])

  const togglePlay = () => {
    setPlay((prev) => {
      const newPlayState = !prev
      if (videoRef.current) {
        if (newPlayState) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      }
      return newPlayState
    })
  }

  useEventListener({
    event: "keydown",
    handler: (event) => {
      /* only call keydown handlers when in fullscreen to not collide with spatial navigation */
      if (!fullscreen) return

      if (KEYS.includes(event.key)) {
        event.preventDefault()
        event.stopPropagation()
      }

      switch (event.key) {
        case " ":
        case "Enter":
          togglePlay()
          break
        case "f":
          handleFullscreen()
          break
        case "ArrowLeft":
          handleSeekBack()
          break
        case "ArrowRight":
          handleSeekForward()
          break
      }
    },
  })

  return {
    play,
    fullscreen,
    videoRef,
    handleEnded,
    togglePlay,
    handleVolumeDown,
    handleVolumeUp,
    handleSeekBack,
    handleSeekForward,
    handleFullscreen,
  }
}

export { useVideoPlayer }
