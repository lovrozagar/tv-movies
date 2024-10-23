import { m } from 'framer-motion'

import type { MovieDetails } from '@/api'
import { Image } from '@/components/image'
import { useMediaQuery } from '@/hooks/local'
import { useMotion } from '@/hooks/local/useMotion/useMotion'
import { getImageSource } from '@/utils'

type CastProps = {
	cast: MovieDetails['credits']['cast']
}

const Cast = (props: CastProps) => {
	const { cast } = props

	const isNotMobile = useMediaQuery('(min-width: 768px')

	const { fadeDown, staggerContainer } = useMotion()

	const topCasts = cast.slice(0, 4)

	if (topCasts.length === 0) return null

	return (
		<>
			<m.h3
				variants={fadeDown}
				className='mb-3 font-bold text-[14.75px] text-secColor xs:text-[15.75px] sm:text-[16.75px] md:text-[18px]'
			>
				Top Casts
			</m.h3>
			<m.div
				variants={staggerContainer(0.2, 1)}
				initial='hidden'
				animate='show'
				className='sm:-mt-2 xs:-mt-[6px] -mt-1 flex flex-wrap gap-2 sm:gap-[14px] md:gap-4'
			>
				{topCasts.map((actor) => {
					return (
						<m.figure
							variants={fadeDown}
							key={actor.id}
							className='flex flex-col justify-start gap-2'
						>
							<div className='h-[54px] w-[40px] md:h-[96px] md:w-[64px]'>
								<Image
									effect={false}
									width={isNotMobile ? 64 : 40}
									height={isNotMobile ? 96 : 54}
									src={getImageSource({ size: 'w185', path: actor.profile_path })}
									alt={actor.name}
									className=' rounded-md object-cover shadow-md'
								/>
							</div>

							<h4 className='sm:-mt-0 max-w-[40px] text-center font-semibold text-[10px] text-gray-300 leading-snug sm:text-[10.75px] md:max-w-[64px] md:text-[12px]'>
								{actor.name}
							</h4>
						</m.figure>
					)
				})}
			</m.div>
		</>
	)
}

export { Cast }
