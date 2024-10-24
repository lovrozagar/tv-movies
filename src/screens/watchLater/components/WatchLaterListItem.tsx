import { BookmarkFilledIcon, BookmarkIcon } from '@/components/icon'
import { Skeleton } from '@/components/skeleton'
import { useMovieDetailsQuery } from '@/hooks/query'
import { Track } from '@/modules/track'
import { WatchLaterButton } from '@/modules/watchLater'

type WatchLaterListItemProps = {
	movieId: number
	listItemIndex: number
	isLastItem: boolean
}

const WatchLaterListItem = (props: WatchLaterListItemProps) => {
	const { movieId, listItemIndex, isLastItem } = props

	const response = useMovieDetailsQuery({ movieId })

	if (response.isLoading) {
		return <Skeleton />
	}

	if (!response.data) return null

	return (
		<div className='flex flex-col gap-y-2'>
			<Track.ListItem
				type='wrap'
				result={response.data}
				listItemIndex={listItemIndex}
				isLastItem={isLastItem}
			/>
			<WatchLaterButton className='xs:ml-0 rounded' movieId={movieId}>
				{({ isSaved }) =>
					isSaved ? <BookmarkFilledIcon className='size-5' /> : <BookmarkIcon className='size-5' />
				}
			</WatchLaterButton>
		</div>
	)
}

export { WatchLaterListItem }
