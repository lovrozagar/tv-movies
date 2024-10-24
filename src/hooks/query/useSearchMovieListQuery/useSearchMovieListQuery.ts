import type { MovieItem, Page } from '@/api'
import { fetchQuery, getApiPath, getQueryKey } from '@/utils'
import { useQuery } from '@tanstack/react-query'

type UseSearchMovieListQuery = {
	query: string
}

function useSearchMovieListQuery(props: UseSearchMovieListQuery) {
	const { query } = props

	return useQuery({
		queryKey: [getQueryKey('search'), query],
		queryFn: async () => {
			return await fetchQuery<Page<MovieItem>>({
				path: getApiPath(`/search/movie?query=${query}&page=1`),
			})
		},
	})
}

type UseSearchMovieListQueryReturn = ReturnType<typeof useSearchMovieListQuery>

export { useSearchMovieListQuery, type UseSearchMovieListQueryReturn }
