import { VideoIcon } from '@/components/icon'
import { Link } from '@/modules/focusable'
import { getNavigationPath } from '@/utils'

type PlayNowLinkProps = {
	movieId: number
}

const PlayNowLink = (props: PlayNowLinkProps) => {
	const { movieId } = props

	return (
		<Link
			autoFocus
			to={getNavigationPath(`/movie/${movieId}/player`)}
			className='flex min-h-[40px] flex-1 items-center justify-center gap-x-2 bg-neutral-300 px-8 font-medium text-black data-[focused=true]:text-black md:w-[250px]'
		>
			Play now
			<VideoIcon className='size-5' />
		</Link>
	)
}

export { PlayNowLink }
