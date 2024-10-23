import { Button } from '@/modules/focusable'
import { useYoutubeVideoState } from '@/modules/youtubeVideo/hooks/useYoutubeVideoState'

type YoutubeVideoProps = {
	videoKey: string
}

const YoutubeVideo = (props: YoutubeVideoProps) => {
	const { videoKey } = props

	const videoState = useYoutubeVideoState({ videoKey })

	return (
		<div ref={videoState.observer.ref}>
			<Button
				className='mx-auto h-[210px] w-[100%] rounded-md shadow-lg sm:h-[320px] md:h-[420px] lg:h-[480px]'
				onPress={videoState.toggleAutoplay}
			>
				<iframe
					src={videoState.src}
					title='trailer'
					width='100%'
					height='100%'
					className='rounded-md'
				/>
			</Button>
		</div>
	)
}

export { YoutubeVideo }
