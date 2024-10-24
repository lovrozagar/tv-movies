import { LazyDetailsScreen } from '@/screens/details'
import { LazyHomeScreen } from '@/screens/home'
import { LazyNotFoundScreen } from '@/screens/notFound'
import { LazyPlayerScreen } from '@/screens/player'
import { LazySearchScreen } from '@/screens/search'
import { LazyTrendingScreen } from '@/screens/trending'
import { LazyWatchLaterScreen } from '@/screens/watchLater'
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
		path: '/trending',
		Component: LazyTrendingScreen,
	},
	{
		path: '/search',
		Component: LazySearchScreen,
	},
	{
		path: '/watch-later',
		Component: LazyWatchLaterScreen,
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
		path: '*',
		Component: LazyNotFoundScreen,
	},
]

export { ROUTES }
