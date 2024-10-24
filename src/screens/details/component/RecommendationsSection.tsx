import { Skeleton } from '@/components/skeleton'
import { useRecommendationMovieListInfiniteQuery } from '@/hooks/query'
import { Track } from '@/modules/track'
import { getMergedMovieListPagesData, handleFetchNextPage } from '@/utils'

type RecommendationsSectionProps = {
	movieId: number
}

const RecommendationsSection = (props: RecommendationsSectionProps) => {
	const { movieId } = props

	const response = useRecommendationMovieListInfiniteQuery({ movieId })

	const mergedData = getMergedMovieListPagesData({ responseData: response.data })

	const results = mergedData?.results

	/* in case response received without results, return null */
	if (response.isSuccess && results?.length === 0) {
		return null
	}

	return (
		<>
			<Track.Section type='row'>
				<Track.Heading>Similar movies</Track.Heading>
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
							trackIndex={0}
							listItemIndex={index}
							isLastItem={index + 1 === array.length}
							onItemFocus={() => handleFetchNextPage({ response, index })}
						/>
					))}
				</Track.List>
			</Track.Section>
		</>
	)
}

export { RecommendationsSection }
