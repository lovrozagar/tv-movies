import type { MovieItem, Page } from '@/api'
import { INITIAL_PAGE } from '@/constants'
import { fetchQuery, getApiPath, getNextPageParam, getQueryKey } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'

type UseRecommendationMovieListInfiniteQueryProps = {
	movieId: number
}

function useRecommendationMovieListInfiniteQuery(
	props: UseRecommendationMovieListInfiniteQueryProps,
) {
	const { movieId } = props

	return useInfiniteQuery({
		initialPageParam: INITIAL_PAGE,
		getNextPageParam,
		queryKey: [getQueryKey('recommendations'), movieId],
		queryFn: async ({ pageParam }) => {
			return await fetchQuery<Page<MovieItem>>({
				path: getApiPath(`/movie/${movieId}/recommendations?page=${pageParam}`),
			})
		},
	})
}

type UseRecommendationMovieListInfiniteQuery = ReturnType<
	typeof useRecommendationMovieListInfiniteQuery
>

export { useRecommendationMovieListInfiniteQuery, type UseRecommendationMovieListInfiniteQuery }
