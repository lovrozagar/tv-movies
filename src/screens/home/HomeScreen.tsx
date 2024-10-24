import { Main } from '@/components/main'
import { HOME_GENRE_LIST } from '@/constants'
import { Track } from '@/modules/track'
import { HomeTrack } from '@/screens/home/components/HomeTrack'

const HomeScreen = () => {
	return (
		<Main className='pt-6'>
			<ul>
				{/* map through defined genres, each genre renders a movie track */}
				{HOME_GENRE_LIST.map((genre, index, array) => (
					/* enable track observer except for first 2 tracks that will be in view initially */
					/* subsequent tracks are fetched and rendered when their observer first enters view (performance optimization) */
					<Track.Observer key={genre.id} enabled={index > 2}>
						<HomeTrack
							key={genre.id}
							trackIndex={index}
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
