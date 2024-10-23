import { lazy } from 'react'

const LazyFavouritesScreen = lazy(async () => {
	const module = await import('@/screens/favourites/FavouriesScreen')
	return { default: module.FavouriesScreen }
})

export { LazyFavouritesScreen }
