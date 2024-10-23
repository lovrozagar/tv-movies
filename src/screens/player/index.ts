import { lazy } from 'react'

const LazyPlayerScreen = lazy(async () => {
	const module = await import('@/screens/player/PlayerScreen')
	return { default: module.PlayerScreen }
})

export { LazyPlayerScreen }
