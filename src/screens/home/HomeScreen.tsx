import { Main } from "@/components/main"
import { HOME_GENRE_LIST } from "@/constants"
import { useDocumentTitle } from "@/hooks/local"
import { Track } from "@/modules/track"
import { FeaturedMovie } from "@/screens/home/components/FeaturedMovie"
import { HomeTrack } from "@/screens/home/components/HomeTrack"

const HomeScreen = () => {
  useDocumentTitle({ title: "Home" })

  return (
    <Main className="pt-8">
      <FeaturedMovie />

      <ul className="mt-6">
        {/* map through defined genres, each genre renders a movie track */}
        {HOME_GENRE_LIST.map((genre, index, array) => (
          /* enable track observer except for first 2 tracks that will be in view initially */
          /* subsequent tracks are fetched and rendered when their observer first enters view (performance optimization) */
          <Track.Observer key={genre.id} enabled={index > 2}>
            <HomeTrack
              key={genre.id}
              genreId={genre.id}
              genreName={genre.name}
              isLastItem={index + 1 === array.length}
            />
          </Track.Observer>
        ))}
      </ul>
    </Main>
  )
}

export { HomeScreen }
