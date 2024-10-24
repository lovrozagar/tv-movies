import type { MovieDetails } from '@/api'
import { StarIcon } from '@/components/icon/star-icon'
import { Image } from '@/components/image'
import { Link } from '@/modules/focusable'
import { type GetMergedMovieListPagesDataReturn, getImageSource } from '@/utils'
import clsx from 'clsx'

/* discriminated union - props based on type */

type TrackListItemRowProps = {
	type: 'row'
	trackIndex: number
	onItemFocus: () => void
}

type TrackListItemWrapProps = {
	type: 'wrap'
}

type TrackListItemProps = {
	/* result can be a movie item or movie details, both contain needed properties for UI */
	result: NonNullable<GetMergedMovieListPagesDataReturn>['results'][number] | MovieDetails
	listItemIndex: number
	isLastItem: boolean
} & (TrackListItemRowProps | TrackListItemWrapProps)

const TrackListItem = (props: TrackListItemProps) => {
	const { type, result, listItemIndex, isLastItem } = props

	/* disable first and last arrows */
	const getDisabledArrows = () => {
		const disabledArrows: ('left' | 'right')[] = []

		if (listItemIndex === 0) {
			disabledArrows.push('left')
		}

		if (isLastItem) {
			disabledArrows.push('right')
		}

		return disabledArrows
	}

	/* handle autofocus and on focus callback */
	const getFocusProps = () => {
		if (type === 'wrap') {
			return {
				autoFocus: listItemIndex === 0,
			}
		}

		const { trackIndex, onItemFocus } = props

		return {
			autoFocus: trackIndex === 0 && listItemIndex === 0,
			onFocus: onItemFocus,
		}
	}

	return (
		<li
			key={result.id}
			className={clsx(
				'flex min-w-[200px] flex-1 items-stretch justify-stretch',
				/* on wrap type position relative is needed to absolutely position children */
				type === 'wrap' ? 'relative' : undefined,
			)}
		>
			<Link
				key={result.id}
				/* autofocus the first track element */
				to={`/movie/${result.id}`}
				className='flex aspect-[2/3] w-[200px] flex-1 flex-col items-stretch justify-stretch hover:bg-transparent data-[focused=true]:bg-transparent'
				scrollable={type === 'row'}
				disabledArrows={getDisabledArrows()}
				{...getFocusProps()}
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
