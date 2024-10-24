import { ReactIcon, TmdbIcon, VercelIcon } from '@/components/icon'
import { getNavigationPath } from '@/utils'

const FOOTER_QUICK_LINK_ITEMS = [
	{
		name: 'Home',
		href: getNavigationPath('/'),
	},
	{
		name: 'Trending',
		href: getNavigationPath('/trending'),
	},
	{
		name: 'Watch later',
		href: getNavigationPath('/watch-later'),
	},
] as const

const FOOTER_SUPPORT_LINK_ITEMS = ['FAQ', 'Contact Us', 'Terms of Service'] as const

const FOOTER_SPECIAL_THANKS_LINK_ITEMS = [
	{
		name: 'React',
		href: 'https://react.dev/',
		Icon: ReactIcon,
	},
	{
		name: 'Vercel',
		href: 'https://vercel.com/',
		Icon: VercelIcon,
	},
	{
		name: 'TMDB',
		href: 'https://www.themoviedb.org/',
		Icon: TmdbIcon,
	},
] as const

export { FOOTER_QUICK_LINK_ITEMS, FOOTER_SUPPORT_LINK_ITEMS, FOOTER_SPECIAL_THANKS_LINK_ITEMS }
