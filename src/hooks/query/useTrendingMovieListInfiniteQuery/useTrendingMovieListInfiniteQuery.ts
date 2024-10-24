import type { MovieItem, Page } from '@/api'
import { INITIAL_PAGE } from '@/constants'
import { fetchQuery, getApiPath, getNextPageParam, getQueryKey } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'

type UseTrendingMovieListInfiniteQueryProps = {
	type: 'now_playing' | 'popular' | 'top_rated' | 'upcoming'
}

function useTrendingMovieListInfiniteQuery(props: UseTrendingMovieListInfiniteQueryProps) {
	const { type } = props

	return useInfiniteQuery({
		initialPageParam: INITIAL_PAGE,
		getNextPageParam,
		queryKey: [getQueryKey(type)],
		queryFn: async ({ pageParam }) => {
			return await fetchQuery<Page<MovieItem>>({
				path: getApiPath(`/movie/${type}?page=${pageParam}`),
			})
		},
	})
}

type UseTrendingMovieListInfiniteQueryReturn = ReturnType<typeof useTrendingMovieListInfiniteQuery>

export { useTrendingMovieListInfiniteQuery, type UseTrendingMovieListInfiniteQueryReturn }
