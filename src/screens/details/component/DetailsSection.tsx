import { Poster } from '@/components/poster'
import type { UseMovieDetailsQueryReturn } from '@/hooks/query'
import { Details } from '@/screens/details/component/Details'

type DetailsSectionProps = {
	movieId: number
	responseData: UseMovieDetailsQueryReturn['data']
}

const DetailsSection = (props: DetailsSectionProps) => {
	const { movieId, responseData } = props

	return (
		<section className='mx-auto flex max-w-[940px] flex-row justify-center gap-8 px-4 pt-24 pb-2 xs:pb-3 sm:px-6 md:gap-10 md:px-8 lg:gap-12'>
			<Poster title={responseData?.title} posterPath={responseData?.poster_path} />
			<Details movieId={movieId} responseData={responseData} />
		</section>
	)
}

export { DetailsSection }
