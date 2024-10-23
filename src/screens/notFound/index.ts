import { lazy } from 'react'

const LazyNotFoundScreen = lazy(async () => {
	const module = await import('@/screens/notFound/NotFoundScreen')
	return { default: module.NotFoundScreen }
})

export { LazyNotFoundScreen }
