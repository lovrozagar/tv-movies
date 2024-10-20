import { DetailsScreen } from '@/screen/details/DetailsScreen'
import { HomeScreen } from '@/screen/home/HomeScreen'

const ROUTES = [
	{
		path: '/',
		Component: HomeScreen,
	},
	{
		path: '/movie/:movieId',
		Component: DetailsScreen,
	},
	{
		path: '/movie/:movieId/player',
		Component: HomeScreen,
	},
	{
		path: '/favouries',
		Component: HomeScreen,
	},
	{
		path: '/search',
		Component: HomeScreen,
	},
]

export { ROUTES }
