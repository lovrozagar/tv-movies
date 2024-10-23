import { lazy } from 'react'

const LazyNotFoundScreen = lazy(async () => {
	const module = await import('@/screen/notFound/NotFoundScreen')
	return { default: module.NotFoundScreen }
})

export { LazyNotFoundScreen }
