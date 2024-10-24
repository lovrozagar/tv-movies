import { useNavigate, useParams } from 'react-router-dom'

import { Error } from '@/components/error'
import { Loader } from '@/components/loader'
import { Main } from '@/components/main'
import { useDocumentTitle } from '@/hooks/local'
import { useMovieDetailsQuery } from '@/hooks/query'
import { Track } from '@/modules/track'
import { DetailsSection } from '@/screens/details/component/DetailsSection'
import { RecommendationsSection } from '@/screens/details/component/RecommendationsSection'
import { YoutubeVideoSection } from '@/screens/details/component/YoutubeVideoSection'

const DetailsScreen = () => {
	const { movieIdParam = '' } = useParams()

	const movieId = Number.parseInt(movieIdParam)

	const response = useMovieDetailsQuery({ movieId })

	useDocumentTitle({
		title: response.data ? response.data.title : undefined,
	})

	const navigate = useNavigate()

	if (!movieId) {
		navigate('/')

		return null
	}

	if (response.isLoading || response.isFetching) {
		return <Loader />
	}

	if (response.isError) {
		return (
			<Error error='Failed to load movie details. Please check your connection and try again.' />
		)
	}

	return (
		<Main>
			{/* details section - poster and information */}
			<DetailsSection movieId={movieId} responseData={response.data} />

			{/* youtube videos (2 max) */}
			<YoutubeVideoSection videos={response.data?.videos.results} />

			{/* recommended similar movies track */}
			<Track.Observer enabled className='min-h-0'>
				<RecommendationsSection movieId={movieId} />
			</Track.Observer>
		</Main>
	)
}

export { DetailsScreen }
