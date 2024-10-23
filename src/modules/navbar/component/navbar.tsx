import { BookmarkIcon, HomeIcon, SearchIcon, TrendIcon, VideoIcon } from '@/components/icon'
import { Button } from '@/modules/focusable'
import { ModeSwitch } from '@/modules/navbar/component/mode-switch'

const Navbar = () => {
	return (
		<nav className='flex h-[60px] justify-center bg-mode-900 px-2'>
			<div className='flex h-full flex-shrink-2 flex-grow basis-1/3 items-center text-white'>
				{/* visaully hide h1 since we are showing the button, only visible to screen readers */}
				<h1 className='sr-only'>Movies</h1>
				<Button className='flex gap-x-4'>
					Movies
					<VideoIcon className='size-6' />
				</Button>
			</div>
			<ul className='flex h-full items-center gap-2'>
				<li>
					<Button aria-label='Home'>
						<HomeIcon className='size-6 font-bold' />
					</Button>
				</li>
				<li>
					<Button aria-label='Search'>
						<SearchIcon className='size-6' />
					</Button>
				</li>
				<li>
					<Button aria-label='Search'>
						<TrendIcon className='size-6' />
					</Button>
				</li>
				<li>
					<Button aria-label='Bookmark'>
						<BookmarkIcon className='size-6' />
					</Button>
				</li>
			</ul>
			<div className='flex h-full flex-shrink-2 flex-grow basis-1/3 items-center justify-end'>
				<ModeSwitch />
			</div>
		</nav>
	)
}

export { Navbar }
