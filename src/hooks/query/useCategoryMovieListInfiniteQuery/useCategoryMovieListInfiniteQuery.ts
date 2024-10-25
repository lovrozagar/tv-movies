import type { MovieItem, Page } from "@/api"
import { INITIAL_PAGE } from "@/constants"
import { fetchQuery, getApiPath, getNextPageParam, getQueryKey } from "@/utils"
import { useInfiniteQuery } from "@tanstack/react-query"

type UseCategoryMovieListInfiniteQueryProps = {
  genreId: number
}

function useCategoryMovieListInfiniteQuery(props: UseCategoryMovieListInfiniteQueryProps) {
  const { genreId } = props

  return useInfiniteQuery({
    initialPageParam: INITIAL_PAGE,
    getNextPageParam,
    queryKey: [getQueryKey("category"), genreId],
    queryFn: async ({ pageParam }) => {
      return await fetchQuery<Page<MovieItem>>({
        path: getApiPath(`/discover/movie?with_genres=${genreId}&page=${pageParam}`),
      })
    },
  })
}

type UseCategoryMovieListInfiniteQueryReturn = ReturnType<typeof useCategoryMovieListInfiniteQuery>

export { useCategoryMovieListInfiniteQuery, type UseCategoryMovieListInfiniteQueryReturn }
