import { lazy } from 'react'

const LazyHomeScreen = lazy(async () => {
	const module = await import('@/screen/home/HomeScreen')
	return { default: module.HomeScreen }
})

export { LazyHomeScreen }
