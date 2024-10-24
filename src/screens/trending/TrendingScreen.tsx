import { Main } from '@/components/main'
import { Track } from '@/modules/track'
import { TrendingTrack } from '@/screens/trending/components/TrendingTrack'
import { TRENDING_TRACK_ITEMS } from '@/screens/trending/constants/trendingTrackItems'

const TrendingScreen = () => {
	return (
		<Main className='pt-6'>
			<ul>
				{/* map through defined genres, each genre renders a movie track */}
				{TRENDING_TRACK_ITEMS.map((trend, index, array) => (
					/* enable track observer except for first 2 tracks that will be in view initially */
					/* subsequent tracks are fetched and rendered when their observer first enters view (performance optimization) */
					<Track.Observer key={trend.id} enabled={index > 2}>
						<TrendingTrack
							key={trend.id}
							trackIndex={index}
							trendId={trend.id}
							trendName={trend.name}
							isLastItem={index + 1 === array.length}
						/>
					</Track.Observer>
				))}
			</ul>
		</Main>
	)
}

export { TrendingScreen }
