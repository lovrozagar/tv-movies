import { cn } from '@/utils'
import { type ComponentPropsWithoutRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type ImageProps = Pick<
	ComponentPropsWithoutRef<'img'>,
	'src' | 'className' | 'alt' | 'width' | 'height'
> & {
	effect: boolean
}

function Image(props: ImageProps) {
	const { src, className, width, alt, height, effect } = props

	const [isImageLoaded, setIsImageLoaded] = useState(false)

	const handleLoad = () => {
		setIsImageLoaded(true)
	}

	return (
		<LazyLoadImage
			src={src}
			alt={alt}
			height={height}
			width={width}
			className={cn(
				'transition-all duration-300 ease-in',
				className,
				!isImageLoaded
					? `opacity-0 ${effect ? 'scale-95' : ''}`
					: `opacity-100 ${effect ? 'scale-100' : ''}`,
			)}
			onLoad={handleLoad}
		/>
	)
}

export { Image }
