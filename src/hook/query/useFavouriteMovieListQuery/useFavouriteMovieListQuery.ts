import { useFavoriteMovieListStore } from '@/store'
import { fetchQuery, getQueryKey } from '@/utils'
import { useQuery } from '@tanstack/react-query'

function useFavourIteMovieListQuery() {
	const favouriteIds = useFavoriteMovieListStore((store) => store.movieIds)

	return useQuery({
		queryKey: [getQueryKey('favorite')],
		queryFn: async () => {
			return await Promise.all(
				favouriteIds.map((id) =>
					fetchQuery({
						path: `${id}`,
					}),
				),
			)
		},
	})
}

export { useFavourIteMovieListQuery }
