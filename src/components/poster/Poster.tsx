import { Image } from '@/components/image'
import { useMotion } from '@/hooks/local/useMotion/useMotion'
import { cn, getImageSource } from '@/utils'
import { m } from 'framer-motion'

type PosterProps = {
	posterPath: string | null | undefined
	title: string | undefined
	className?: string
}

const Poster = (props: PosterProps) => {
	const { posterPath, title, className } = props

	const { zoomIn } = useMotion()

	return (
		<div className={cn('hidden md:block', className)}>
			<m.div
				variants={zoomIn(0.6, 0.8)}
				initial='hidden'
				animate='show'
				className='h-[380px] w-[254px]'
			>
				<Image
					effect={false}
					width={254}
					height={380}
					src={getImageSource({ size: 'w342', path: posterPath })}
					alt={title ?? ''}
					className='rounded-xl object-cover shadow-lg'
				/>
			</m.div>
		</div>
	)
}

export { Poster }
