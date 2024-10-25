import { Poster } from "@/components/poster"
import { Skeleton } from "@/components/skeleton"
import { useTrendingMovieListInfiniteQuery } from "@/hooks/query"
import { Backdrop } from "@/modules/backdrop"
import { Link } from "@/modules/focusable"
import { Details } from "@/screens/details/components/Details"
import { getImageSource, getNavigationPath } from "@/utils"

const FeaturedMovie = () => {
  const response = useTrendingMovieListInfiniteQuery({ type: "popular" })

  const popularMovie = response.data?.pages.at(0)?.results.at(0)

  if (response.isLoading) {
    return <Skeleton className="h-[500px] w-full rounded-xl" />
  }

  if (!popularMovie) {
    return null
  }

  const imageUrl = getImageSource({ path: popularMovie.backdrop_path, size: "original" })

  return (
    <Backdrop className="h-[500px] rounded-xl">
      <Backdrop.Image imageUrl={imageUrl} />
      <Backdrop.Mask />

      <Backdrop.FrontContent className="flex h-full flex-row items-center justify-center gap-x-12 px-4">
        <Link to={getNavigationPath(`/movie/${popularMovie.id}`)} className="hidden md:block">
          <Poster title={popularMovie.title} posterPath={popularMovie.poster_path} />
        </Link>
        <Details movieId={popularMovie.id} responseData={popularMovie} />
      </Backdrop.FrontContent>
    </Backdrop>
  )
}

export { FeaturedMovie }
