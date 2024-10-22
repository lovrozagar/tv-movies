import type { MovieDetails } from '@/api'
import { fetchQuery, getApiPath, getQueryKey } from '@/utils'
import { useQuery } from '@tanstack/react-query'

type UseMovieDetailsQueryProps = {
	movieId: number
}

function useMovieDetailsQuery(props: UseMovieDetailsQueryProps) {
	const { movieId } = props

	return useQuery({
		queryKey: [getQueryKey('details'), movieId],
		queryFn: async () => {
			return await fetchQuery<MovieDetails>({
				path: getApiPath(`/movie/${movieId}?append_to_response=videos,credits`),
			})
		},
	})
}

export { useMovieDetailsQuery }
