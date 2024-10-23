import { useTimeout } from '@/hook/local'
import { YOUTUBE_VIDEO_AUTOPLAY_PARAMS } from '@/modules/youtubeVideo/constants/youtubeVideo'
import { getYoutubeVideoBaseUrl } from '@/modules/youtubeVideo/utils/getYoutubeVideoBaseUrl'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type UseYoutubeVideoStateProps = {
	videoKey: string
}

function useYoutubeVideoState(props: UseYoutubeVideoStateProps) {
	const { videoKey } = props

	const [src, setSrc] = useState(() => getYoutubeVideoBaseUrl(videoKey))

	const observer = useInView()

	const timeout = useTimeout({
		delay: 1000,
		callback: () => setSrc(`${getYoutubeVideoBaseUrl(videoKey)}${YOUTUBE_VIDEO_AUTOPLAY_PARAMS}`),
	})

	/* start autoplay when in view */
	useEffect(() => {
		if (!observer.inView) return

		timeout.call()
	}, [observer.inView, timeout.call])

	/* toggle autoplay on press */
	const toggleAutoplay = () => {
		if (src.includes(YOUTUBE_VIDEO_AUTOPLAY_PARAMS)) {
			setSrc(getYoutubeVideoBaseUrl(videoKey))

			return
		}

		setSrc(`${getYoutubeVideoBaseUrl(videoKey)}${YOUTUBE_VIDEO_AUTOPLAY_PARAMS}`)
	}

	return {
		src,
		observer,
		toggleAutoplay,
	}
}

export { useYoutubeVideoState }
