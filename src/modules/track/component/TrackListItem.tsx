import { StarIcon } from '@/components/icon/star-icon'
import { Image } from '@/components/image'
import type { GetMergedCategoryMovieListPagesDataReturn } from '@/hook/query/useCategoryMovieListInfiniteQuery/getMergedCategoryMovieListPagesData'
import { Link } from '@/modules/focusable'
import { getImageSource } from '@/utils'

type TrackListItemProps = {
	trackIndex: number
	listItemIndex: number
	result: NonNullable<GetMergedCategoryMovieListPagesDataReturn>['results'][number]
	onItemFocus: () => void
}

const TrackListItem = (props: TrackListItemProps) => {
	const { trackIndex, listItemIndex, result, onItemFocus } = props

	return (
		<li key={result.id} className='flex min-w-[200px] flex-1 items-stretch justify-stretch'>
			<Link
				key={result.id}
				autoFocus={trackIndex === 0 && listItemIndex === 0}
				to={`/movie/${result.id}`}
				className='flex aspect-[2/3] w-[200px] flex-1 flex-col items-stretch justify-stretch hover:bg-transparent data-[focused=true]:bg-transparent'
				onFocus={onItemFocus}
			>
				<div className='relative flex-1'>
					<Image
						effect={false}
						src={getImageSource({ size: 'w342', path: result.poster_path })}
						alt={result.title}
						className='aspect-[2/3] rounded-lg'
					/>
					<div className='absolute right-2 bottom-2 flex items-center gap-x-1 rounded-full bg-mode px-2 py-1 text-[0.65rem]'>
						<span>{result.vote_average.toFixed(1)}</span>
						<StarIcon className='size-3' />
					</div>
				</div>
				<p className='mt-1.5 truncate font-medium'>{result.title}</p>
				<p className='truncate font-thin text-[0.75rem]'>{result.overview}</p>
			</Link>
		</li>
	)
}

export { TrackListItem }
