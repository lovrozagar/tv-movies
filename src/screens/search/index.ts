import { lazy } from 'react'

const LazySearchScreen = lazy(async () => {
	const module = await import('@/screens/search/SearchScreen')
	return { default: module.SearchScreen }
})

export { LazySearchScreen }
