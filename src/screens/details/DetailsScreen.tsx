import { useParams } from "react-router-dom"

import { Error } from "@/components/error"
import { Loader } from "@/components/loader"
import { Main } from "@/components/main"
import { useDocumentTitle } from "@/hooks/local"
import { useMovieDetailsQuery } from "@/hooks/query"
import { Backdrop } from "@/modules/backdrop"
import { Redirect } from "@/modules/renderless"
import { Track } from "@/modules/track"
import { DetailsSection } from "@/screens/details/components/DetailsSection"
import { RecommendationsSection } from "@/screens/details/components/RecommendationsSection"
import { YoutubeVideoSection } from "@/screens/details/components/YoutubeVideoSection"
import { getImageSource } from "@/utils"

const DetailsScreen = () => {
  const { movieIdParam = "" } = useParams()

  const movieId = Number.parseInt(movieIdParam)

  const response = useMovieDetailsQuery({ movieId })

  console.log("details", response.data)

  useDocumentTitle({
    title: response.data ? response.data.title : undefined,
  })

  if (!movieId) {
    return <Redirect path="/" />
  }

  if (response.isLoading || response.isFetching) {
    return <Loader />
  }

  if (response.isError) {
    return (
      <Error error="Failed to load movie details. Please check your connection and try again." />
    )
  }

  return (
    <Main className="px-0 md:px-0 lg:px-0">
      <Backdrop className="flex h-[600px] flex-col">
        <Backdrop.Image
          imageUrl={getImageSource({ path: response.data?.poster_path ?? "", size: "original" })}
        />
        <Backdrop.Mask />

        <Backdrop.FrontContent className="flex flex-1 flex-col">
          {/* details section - poster and information */}
          <DetailsSection movieId={movieId} responseData={response.data} />
        </Backdrop.FrontContent>
      </Backdrop>

      {/* youtube videos (2 max) */}
      <YoutubeVideoSection videos={response.data?.videos.results} />

      {/* recommended similar movies track */}
      <Track.Observer enabled className="min-h-0">
        <RecommendationsSection movieId={movieId} />
      </Track.Observer>
    </Main>
  )
}

export { DetailsScreen }
