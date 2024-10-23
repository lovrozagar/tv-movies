import { HOME_GENRE_LIST } from '@/constants'
import { Track } from '@/modules/track'
import { HomeTrack } from '@/screen/home/components/HomeTrack'

const HomeScreen = () => {
	return (
		<main className='py-2 pb-[100px]'>
			<ul className='mt-4'>
				{HOME_GENRE_LIST.map((genre, index) => (
					/* enable track observer except for first 2 tracks that will be in view initially */
					/* subsequent tracks are fetched and rendered when their observer first enters view (performance optimization) */
					<Track.Observer key={genre.id} enabled={index > 2}>
						<HomeTrack
							key={genre.id}
							trackIndex={index}
							genreId={genre.id}
							genreName={genre.name}
						/>
					</Track.Observer>
				))}
			</ul>
		</main>
	)
}

export { HomeScreen }
