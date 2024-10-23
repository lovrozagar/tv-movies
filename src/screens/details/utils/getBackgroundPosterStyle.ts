import type { UseMovieDetailsQueryReturn } from '@/hooks/query'
import { getImageSource } from '@/utils'

type GetBackgroundPosterStyleProps = {
	responseData: UseMovieDetailsQueryReturn['data']
}

function getBackgroundPosterStyle(props: GetBackgroundPosterStyleProps) {
	const { responseData } = props

	return {
		backgroundPosition: 'top',
		backgroundSize: 'cover',
		backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.98),rgba(0,0,0,0.8) ,rgba(0,0,0,0.4)),url('${getImageSource({ size: 'original', path: responseData?.poster_path })}'`,
	}
}

export { getBackgroundPosterStyle }
