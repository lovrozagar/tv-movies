import { lazy } from 'react'

const LazyTrendingScreen = lazy(async () => {
	const module = await import('@/screens/trending/TrendingScreen')
	return { default: module.TrendingScreen }
})

export { LazyTrendingScreen }
