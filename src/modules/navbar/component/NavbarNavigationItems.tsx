import { BookmarkIcon, HomeIcon, SearchIcon, TrendIcon } from '@/components/icon'
import { Button, Link } from '@/modules/focusable'
import { NAVBAR_ITEM_BASE_CLASSNAME } from '@/modules/navbar/constant/navbarItem'
import { getNavigationPath } from '@/utils'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

const NavbarNavigationItems = () => {
	const location = useLocation()
	const pathname = location.pathname

	return (
		<>
			<li className='flex'>
				<Link
					to={getNavigationPath('/')}
					className={clsx(
						NAVBAR_ITEM_BASE_CLASSNAME,
						pathname === getNavigationPath('/') ? 'text-mode-contrast' : undefined,
					)}
					aria-label='Home'
					disabledArrows={['up']}
				>
					<HomeIcon className='size-6 font-bold' />
				</Link>
			</li>
			<li className='flex'>
				<Link
					to={getNavigationPath('/trending')}
					aria-label='Trending'
					disabledArrows={['up']}
					className={clsx(
						NAVBAR_ITEM_BASE_CLASSNAME,
						pathname === getNavigationPath('/trending') ? 'text-mode-contrast' : undefined,
					)}
				>
					<TrendIcon className='size-6' />
				</Link>
			</li>
			<li className='flex'>
				<Button aria-label='Search' disabledArrows={['up']} className={NAVBAR_ITEM_BASE_CLASSNAME}>
					<SearchIcon className='size-6' />
				</Button>
			</li>
			<li className='flex'>
				<Link
					to={getNavigationPath('/watch-later')}
					aria-label='Watch later'
					disabledArrows={['up']}
					className={clsx(
						NAVBAR_ITEM_BASE_CLASSNAME,
						pathname === getNavigationPath('/watch-later') ? 'text-mode-contrast' : undefined,
					)}
				>
					<BookmarkIcon className='size-6' />
				</Link>
			</li>
		</>
	)
}

export { NavbarNavigationItems }
