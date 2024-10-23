import type { MovieItem, Page } from '@/api'
import { fetchQuery, getApiPath, getQueryKey } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'

type UseCategoryMovieListInfiniteQueryProps = {
	genreId: number
}

function useCategoryMovieListInfiniteQuery(props: UseCategoryMovieListInfiniteQueryProps) {
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

type UseCategoryMovieListInfiniteQueryReturn = ReturnType<typeof useCategoryMovieListInfiniteQuery>

export { useCategoryMovieListInfiniteQuery, type UseCategoryMovieListInfiniteQueryReturn }
