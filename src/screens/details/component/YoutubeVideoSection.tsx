import type { MovieDetails } from '@/api'
import { YoutubeVideo } from '@/modules/youtubeVideo'

type YoutubeVideoSectionProps = {
	videos: MovieDetails['videos']['results'] | undefined
}

const YoutubeVideoSection = (props: YoutubeVideoSectionProps) => {
	const { videos } = props

	/* do not render the section if there are no videos */
	if (!videos || videos.length === 0) {
		return null
	}

	/* get first two videos */
	const youtubeVideos = videos.slice(0, 2)

	return (
		<section className='mx-auto flex max-w-[1140px] flex-col gap-8 xs:gap-10 px-4 py-8 xs:py-10 sm:gap-12 sm:px-6 sm:py-12 md:gap-14 md:px-8 md:py-16 lg:gap-16 lg:py-24 xl:px-0'>
			{youtubeVideos.map((video) => {
				return (
					<div
						key={video.id}
						className='mx-auto flex w-[90%] flex-col gap-[2px] xs:gap-1 sm:w-[80%] sm:gap-[6px] md:gap-2'
					>
						<h2 className='mb-1 font-nunito font-semibold text-[16.75px] text-neutral-500 xs:text-[18px] sm:text-[18.75px] md:text-[22.75px] lg:text-[24px]'>
							{video.name}
						</h2>
						<YoutubeVideo videoKey={video.key} />
					</div>
				)
			})}
		</section>
	)
}

export { YoutubeVideoSection }
