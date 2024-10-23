import { lazy } from 'react'

const LazyFavouritesScreen = lazy(async () => {
	const module = await import('@/screen/favourites/FavouriesScreen')
	return { default: module.FavouriesScreen }
})

export { LazyFavouritesScreen }
