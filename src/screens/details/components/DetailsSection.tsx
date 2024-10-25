import { Poster } from "@/components/poster"
import type { UseMovieDetailsQueryReturn } from "@/hooks/query"
import { Link } from "@/modules/focusable"
import { Details } from "@/screens/details/components/Details"
import { getNavigationPath } from "@/utils"

type DetailsSectionProps = {
  movieId: number
  responseData: UseMovieDetailsQueryReturn["data"]
}

const DetailsSection = (props: DetailsSectionProps) => {
  const { movieId, responseData } = props

  return (
    <section className="mx-auto flex max-w-[940px] flex-1 flex-row items-center justify-center gap-x-8 px-4 sm:px-6 md:gap-x-10 md:gap-y-10 md:px-8 lg:gap-x-12 lg:gap-y-12">
      <Link to={getNavigationPath(`/movie/${movieId}/player`)}>
        <Poster title={responseData?.title} posterPath={responseData?.poster_path} />
      </Link>
      <Details movieId={movieId} responseData={responseData} />
    </section>
  )
}

export { DetailsSection }
