import { LazyDetailsScreen } from '@/screens/details'
import { LazyFavouritesScreen } from '@/screens/favourites'
import { LazyHomeScreen } from '@/screens/home'
import { LazyNotFoundScreen } from '@/screens/notFound'
import { LazyPlayerScreen } from '@/screens/player'
import { LazySearchScreen } from '@/screens/search'
import type { RouterPath } from '@/types'
import type { LazyExoticComponent } from 'react'

type Route = {
	path: RouterPath
	Component: LazyExoticComponent<() => React.JSX.Element | null>
}

const ROUTES: Route[] = [
	{
		path: '/',
		Component: LazyHomeScreen,
	},
	{
		path: '/movie/:movieIdParam',
		Component: LazyDetailsScreen,
	},
	{
		path: '/movie/:movieIdParam/player',
		Component: LazyPlayerScreen,
	},
	{
		path: '/watch-later',
		Component: LazyFavouritesScreen,
	},
	{
		path: '/search',
		Component: LazySearchScreen,
	},
	{
		path: '*',
		Component: LazyNotFoundScreen,
	},
]

export { ROUTES }
