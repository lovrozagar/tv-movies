import { Skeleton } from '@/components/skeleton'
import { PAGE_SIZE } from '@/constants'
import { useCategoryMovieListInfiniteQuery } from '@/hooks/query'
import { getMergedCategoryMovieListPagesData } from '@/hooks/query/useCategoryMovieListInfiniteQuery/getMergedCategoryMovieListPagesData'
import { Track } from '@/modules/track'

type HomeTrackProps = {
	trackIndex: number
	genreId: number
	genreName: string
}

const HomeTrack = (props: HomeTrackProps) => {
	const { trackIndex, genreId, genreName } = props

	const response = useCategoryMovieListInfiniteQuery({ genreId: genreId })

	const mergedData = getMergedCategoryMovieListPagesData({ responseData: response.data })

	const results = mergedData?.results

	const handleItemFocus = (index: number) => {
		const realIndex = index + 1

		if (realIndex % PAGE_SIZE !== 0) return

		response.fetchNextPage()
	}

	return (
		<li className='mb-20'>
			<Track.Heading>{genreName}</Track.Heading>
			<Track.Section>
				<Track.List>
					{response.isLoading
						? Array.from({ length: 16 }).map((_, index) => (
								<Skeleton key={index} className={'h-[348px] min-w-[200px]'} />
							))
						: null}
					{results?.map((result, index) => (
						<Track.ListItem
							key={result.id}
							result={result}
							trackIndex={trackIndex}
							listItemIndex={index}
							onItemFocus={() => handleItemFocus(index)}
						/>
					))}
				</Track.List>
			</Track.Section>
		</li>
	)
}

export { HomeTrack }
