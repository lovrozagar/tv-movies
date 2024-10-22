import type { MovieItem, Page } from '@/api'
import { fetchQuery, getApiPath, getQueryKey } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'

type UseCategoryMovieListQueryProps = {
	genreId: number
}

function useCategoryMovieListQuery(props: UseCategoryMovieListQueryProps) {
	const { genreId } = props

	return useInfiniteQuery({
		initialPageParam: 1,
		queryKey: [getQueryKey('category'), genreId],
		queryFn: async ({ pageParam }) => {
			return await fetchQuery<Page<MovieItem>>({
				path: getApiPath(`/discover/movie?with_genres=${genreId}&page=${pageParam}`),
			})
		},
		getNextPageParam: (data) => {
			const isLastPage = data.page === data.total_pages

			return isLastPage ? undefined : data.page + 1
		},
	})
}

export { useCategoryMovieListQuery }
