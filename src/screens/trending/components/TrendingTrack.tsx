import { Skeleton } from '@/components/skeleton'
import { useTrendingMovieListInfiniteQuery } from '@/hooks/query'
import { Track } from '@/modules/track'
import type { TRENDING_TRACK_ITEMS } from '@/screens/trending/constants/trendingTrackItems'
import { getMergedMovieListPagesData, handleFetchNextPage } from '@/utils'

type TrendingTrackProps = {
	trackIndex: number
	trendId: (typeof TRENDING_TRACK_ITEMS)[number]['id']
	trendName: string
	isLastItem: boolean
}

const TrendingTrack = (props: TrendingTrackProps) => {
	const { trackIndex, trendId, trendName, isLastItem } = props

	const response = useTrendingMovieListInfiniteQuery({ type: trendId })

	const mergedData = getMergedMovieListPagesData({ responseData: response.data })

	const results = mergedData?.results

	/* in case response received without results, return null */
	if (response.isSuccess && results?.length === 0) {
		return null
	}

	return (
		<li className={isLastItem ? undefined : 'pb-20'}>
			<Track.Section type='row'>
				<Track.Heading>{trendName}</Track.Heading>
				<Track.List type='row'>
					{response.isLoading
						? Array.from({ length: 16 }).map((_, index) => (
								<Skeleton key={index} className={'h-[348px] min-w-[200px]'} />
							))
						: null}
					{results?.map((result, index, array) => (
						<Track.ListItem
							type='row'
							key={result.id}
							result={result}
							trackIndex={trackIndex}
							listItemIndex={index}
							isLastItem={index + 1 === array.length}
							onItemFocus={() => handleFetchNextPage({ response, index })}
						/>
					))}
				</Track.List>
			</Track.Section>
		</li>
	)
}

export { TrendingTrack }
