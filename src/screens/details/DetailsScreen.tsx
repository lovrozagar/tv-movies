import { useNavigate, useParams } from 'react-router-dom'

import { Error } from '@/components/error'
import { Loader } from '@/components/loader'
import { Poster } from '@/components/poster'
import { useDocumentTitle } from '@/hooks/local'
import { useMovieDetailsQuery } from '@/hooks/query'
import { BackNavigator } from '@/modules/renderless'
import { InfoSection } from '@/screens/details/component/InfoSection'
import { YoutubeVideoSection } from '@/screens/details/component/YoutubeVideoSection'
import { getBackgroundPosterStyle } from '@/screens/details/utils/getBackgroundPosterStyle'

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
		<>
			<BackNavigator />

			<main className='w-full' style={getBackgroundPosterStyle({ responseData: response.data })}>
				<div className='mx-auto flex max-w-[940px] flex-row justify-center gap-8 px-4 pt-24 pb-2 xs:pb-3 sm:px-6 md:gap-10 md:px-8 lg:gap-12'>
					<Poster title={response.data?.title} posterPath={response.data?.poster_path} />
					<InfoSection movieId={movieId} responseData={response.data} />
				</div>

				<YoutubeVideoSection videos={response.data?.videos.results} />
			</main>
		</>
	)
}

export { DetailsScreen }
