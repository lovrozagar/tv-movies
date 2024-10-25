import { Empty } from "@/components/empty"
import { Main } from "@/components/main"
import { Skeleton } from "@/components/skeleton"
import { useDocumentTitle } from "@/hooks/local"
import { useSearchMovieListQuery } from "@/hooks/query"
import { Track } from "@/modules/track"
import { Search } from "@/screens/search/components/Search"
import { SEARCH_QUERY_PARAM_KEY } from "@/screens/search/constants/searchParams"
import { useSearchParams } from "react-router-dom"

const SearchScreen = () => {
  useDocumentTitle({ title: "Search" })

  const [searchParams] = useSearchParams()

  const queryParam = searchParams.get(SEARCH_QUERY_PARAM_KEY) ?? ""

  const response = useSearchMovieListQuery({ query: queryParam, enabled: true })

  const results = response.data?.results ?? []

  const isEmpty = response.isSuccess && results.length === 0

  return (
    <Main>
      <section className="mt-6">
        <Search />
      </section>
      <Track.Section type="wrap">
        <Track.Heading>Results</Track.Heading>
        {isEmpty ? (
          <Empty
            description={
              queryParam.length > 0
                ? "Try changing your search term. "
                : "Start searching to see results."
            }
          />
        ) : (
          <Track.List type="wrap">
            {response.isFetching
              ? Array.from({ length: 16 }).map((_, index) => (
                  <Skeleton key={index} className={"h-[348px] min-w-[200px]"} />
                ))
              : null}
            {results.map((result) => (
              <Track.ListItem type="wrap" key={result.id} result={result} />
            ))}
          </Track.List>
        )}
      </Track.Section>
    </Main>
  )
}

export { SearchScreen }
