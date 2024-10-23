import { lazy } from 'react'

const LazyDetailsScreen = lazy(async () => {
	const module = await import('@/screens/details/DetailsScreen')
	return { default: module.DetailsScreen }
})

export { LazyDetailsScreen }
