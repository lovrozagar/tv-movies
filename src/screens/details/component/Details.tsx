import { BookmarkFilledIcon, BookmarkIcon } from '@/components/icon'
import { useMotion } from '@/hooks/local'
import type { UseMovieDetailsQueryReturn } from '@/hooks/query'
import { Button } from '@/modules/focusable'
import { WatchLaterButton } from '@/modules/watchLater'
import { Cast } from '@/screens/details/component/Cast'
import { Genre } from '@/screens/details/component/Genre'
import { PlayNowLink } from '@/screens/details/component/PlayNowLink'
import { cn } from '@/utils'
import { m } from 'framer-motion'
import { useState } from 'react'

type DetailsProps = {
	movieId: number
	responseData: UseMovieDetailsQueryReturn['data']
}

const Details = (props: DetailsProps) => {
	const { movieId, responseData } = props

	const { fadeDown, staggerContainer } = useMotion()

	const [show, setShow] = useState<boolean>(false)

	const toggleShow = () => setShow((prev) => !prev)

	return (
		<m.div
			variants={staggerContainer(0.2, 0.4)}
			initial='hidden'
			animate='show'
			className='mb-8 flex max-w-[90vw] flex-1 flex-col gap-3 xs:gap-[14px] font-nunito text-gray-300 sm:max-w-[80vw] sm:gap-4 md:max-w-[520px] lg:gap-5'
		>
			<m.h2
				variants={fadeDown}
				className='max-w-[280px] xs:max-w-[320px] font-extrabold text-[28.75px] text-secColor xs:text-3xl leading-snug xs:leading-normal sm:max-w-[420px] sm:text-4xl sm:leading-[1.2] md:max-w-[420px]'
			>
				{responseData?.title}
			</m.h2>

			<m.ul
				variants={fadeDown}
				className='flex flex-row flex-wrap items-center gap-[6px] xs:gap-3 sm:gap-[14px]'
			>
				{responseData?.genres.map((genre) => (
					<Genre key={genre.id} name={genre.name} />
				))}
			</m.ul>

			<m.p
				variants={fadeDown}
				className='text-[14.25px] xs:text-[15.75px] leading-relaxed sm:text-base'
			>
				<span>
					{(responseData?.overview.length ?? 0) > 280
						? `${show ? responseData?.overview : `${responseData?.overview.slice(0, 280)}...`}`
						: responseData?.overview}
				</span>
				<Button
					className={cn(
						'ml-1 p-0 text-white hover:underline',
						(responseData?.overview.length ?? 0) > 280 ? 'inline-block' : 'hidden',
					)}
					onPress={toggleShow}
				>
					{!show ? 'show more' : 'show less'}
				</Button>
			</m.p>

			<div>
				<Cast cast={responseData?.credits?.cast || []} />

				<div className='mt-8 flex xs:flex-row flex-col xs:items-center xs:justify-center'>
					<PlayNowLink movieId={movieId} />
					<WatchLaterButton movieId={movieId}>
						{({ isSaved }) => (
							<>
								{isSaved ? 'Saved' : 'Watch later'}
								{isSaved ? (
									<BookmarkFilledIcon className='size-5' />
								) : (
									<BookmarkIcon className='size-5' />
								)}
							</>
						)}
					</WatchLaterButton>
				</div>
			</div>
		</m.div>
	)
}

export { Details }
