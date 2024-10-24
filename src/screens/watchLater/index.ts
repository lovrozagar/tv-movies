import { lazy } from 'react'

const LazyWatchLaterScreen = lazy(async () => {
	const module = await import('@/screens/watchLater/WatchLaterScreen')
	return { default: module.WatchLaterScreen }
})

export { LazyWatchLaterScreen }
