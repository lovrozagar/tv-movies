import { lazy } from 'react'

const LazyPlayerScreen = lazy(async () => {
	const module = await import('@/screen/player/PlayerScreen')
	return { default: module.PlayerScreen }
})

export { LazyPlayerScreen }
