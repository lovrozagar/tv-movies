import { lazy } from 'react'

const LazyHomeScreen = lazy(async () => {
	const module = await import('@/screens/home/HomeScreen')
	return { default: module.HomeScreen }
})

export { LazyHomeScreen }
