import { ENV } from '@/env'

type GetImageSourceProps = {
	size: 'w185' | 'w342' | 'original'
	path: string | null | undefined
}

function getImageSource(props: GetImageSourceProps) {
	const { size, path } = props

	if (!path) return ''

	return `${ENV.TMDB_PICTURE_URL}/${size}/${path}`
}

export { getImageSource }
