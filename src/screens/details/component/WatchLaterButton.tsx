import { BookmarkFilledIcon, BookmarkIcon } from '@/components/icon'
import { Button } from '@/modules/focusable'
import { useWatchLaterStore } from '@/stores'

type WatchLaterButtonProps = {
	movieId: number
}

const WatchLaterButton = (props: WatchLaterButtonProps) => {
	const { movieId } = props

	const movieIds = useWatchLaterStore((store) => store.movieIds)
	const toggleMovieId = useWatchLaterStore((store) => store.toggleMovieId)

	const isSaved = movieIds?.includes(movieId)

	return (
		<Button
			className='mt-4 xs:mt-0 ml-0 xs:ml-4 flex min-h-[40px] flex-1 items-center justify-center gap-x-2 bg-neutral-900 px-8 font-medium text-white'
			onPress={() => toggleMovieId(movieId)}
		>
			{isSaved ? 'Saved' : 'Watch later'}
			{isSaved ? <BookmarkFilledIcon className='size-5' /> : <BookmarkIcon className='size-5' />}
		</Button>
	)
}

export { WatchLaterButton }
