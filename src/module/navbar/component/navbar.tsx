import { Button } from '@/component/button'
import { BookmarkIcon, HomeIcon, SearchIcon, TrendIcon, VideoIcon } from '@/component/icon'
import { ModeSwitch } from '@/module/navbar/component/mode-switch'
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { useEffect } from 'react'

const Navbar = () => {
	const { ref, focusKey, focusSelf } = useFocusable({ focusKey: 'navbar' })

	/* focus navbar initially */
	useEffect(() => {
		focusSelf()
	}, [focusSelf])

	return (
		<FocusContext.Provider value={focusKey}>
			<nav className='flex h-[60px] justify-center bg-mode-900 px-2'>
				<div className='flex h-full flex-shrink-2 flex-grow basis-1/3 items-center text-white'>
					{/* visaully hide h1 since we are showing the button, only visible to screen readers */}
					<h1 className='sr-only'>YouTube</h1>
					<Button className='flex gap-x-4'>
						Movies
						<VideoIcon className='size-6' />
					</Button>
				</div>
				<ul ref={ref} className='flex h-full items-center gap-2'>
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
		</FocusContext.Provider>
	)
}

export { Navbar }
