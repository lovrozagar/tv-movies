import type { MovieItem, Page } from "@/api"
import { fetchQuery, getApiPath, getQueryKey } from "@/utils"
import { useQuery } from "@tanstack/react-query"

type UseSearchMovieListQuery = {
  query: string
  enabled: boolean
}

function useSearchMovieListQuery(props: UseSearchMovieListQuery) {
  const { query, enabled = true } = props

  return useQuery({
    enabled,
    queryKey: [getQueryKey("search"), query],
    queryFn: async () => {
      return await fetchQuery<Page<MovieItem>>({
        path: getApiPath(`/search/movie?query=${query}&page=1`),
      })
    },
  })
}

type UseSearchMovieListQueryReturn = ReturnType<typeof useSearchMovieListQuery>

export { useSearchMovieListQuery, type UseSearchMovieListQueryReturn }
