import { Container } from '@/components/container'
import { Link } from '@/modules/focusable'
import { ModeSwitch } from '@/modules/navbar/component/ModeSwitch'
import { NavbarNavigationItems } from '@/modules/navbar/component/NavbarNavigationItems'
import { getNavigationPath } from '@/utils'

const Navbar = () => {
	return (
		<nav className='flex h-[60px] justify-center bg-mode-900'>
			<Container className='flex justify-center'>
				<div className='flex h-full flex-shrink-2 flex-grow basis-1/3 items-center text-white'>
					{/* visaully hide h1 since we are showing the button, only visible to screen readers */}
					<h1 className='sr-only'>Movies</h1>
					<Link
						to={getNavigationPath('/')}
						className='ml-2 flex gap-x-4 font-medium text-xl'
						disabledArrows={['left', 'up']}
					>
						Movies
					</Link>
				</div>
				<ul className='flex h-full items-center gap-2'>
					<NavbarNavigationItems />
				</ul>
				<div className='flex h-full flex-shrink-2 flex-grow basis-1/3 items-center justify-end'>
					<ModeSwitch disabledArrows={['up', 'right']} />
				</div>
			</Container>
		</nav>
	)
}

export { Navbar }
