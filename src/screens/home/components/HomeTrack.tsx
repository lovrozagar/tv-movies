import { Skeleton } from "@/components/skeleton"
import { useCategoryMovieListInfiniteQuery } from "@/hooks/query"
import { Track } from "@/modules/track"
import { getMergedMovieListPagesData, handleFetchNextPage } from "@/utils"

type HomeTrackProps = {
  genreId: number
  genreName: string
  isLastItem: boolean
}

const HomeTrack = (props: HomeTrackProps) => {
  const { genreId, genreName, isLastItem } = props

  const response = useCategoryMovieListInfiniteQuery({ genreId: genreId })

  const mergedData = getMergedMovieListPagesData({ responseData: response.data })

  const results = mergedData?.results

  /* in case response received without results, return null */
  if (response.isSuccess && results?.length === 0) {
    return null
  }

  return (
    <li className={isLastItem ? undefined : "pb-20"}>
      <Track.Section type="row">
        <Track.Heading>{genreName}</Track.Heading>
        <Track.List type="row">
          {response.isLoading
            ? Array.from({ length: 16 }).map((_, index) => (
                <Skeleton key={index} className={"h-[348px] min-w-[200px]"} />
              ))
            : null}
          {results?.map((result, itemIndex) => (
            <Track.ListItem
              type="row"
              key={`${result.id}${itemIndex}`}
              result={result}
              autoFocus={false}
              onFocus={() => handleFetchNextPage({ response, index: itemIndex })}
            />
          ))}
        </Track.List>
      </Track.Section>
    </li>
  )
}

export { HomeTrack }
