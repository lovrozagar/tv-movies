import { Container } from '@/components/container'
import { ReactIcon, TmdbIcon, VercelIcon } from '@/components/icon'
import { getNavigationPath } from '@/utils'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='border-mode-accent border-t bg-background text-foreground'>
			<Container className='py-8'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
					<div className='flex flex-col justify-center space-y-4'>
						<h2 className='font-bold text-2xl'>Movies</h2>
						<p className='max-w-[60%] text-balance text-muted-foreground text-sm'>
							Your go-to destination for all things movies.
						</p>
					</div>
					<div>
						<h3 className='mb-4 font-semibold'>Quick Links</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link to={getNavigationPath('/')}>Home</Link>
							</li>
							<li>
								<Link to={getNavigationPath('/trending')}>Trending</Link>
							</li>
							<li>
								<Link to={getNavigationPath('/')}>Watch later</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='mb-4 font-semibold'>Support (maintenance)</h3>
						<ul className='space-y-2 text-sm'>
							<li className='cursor-not-allowed'>FAQ</li>
							<li className='cursor-not-allowed'>Contact Us</li>
							<li className='cursor-not-allowed'>Terms of Service</li>
						</ul>
					</div>
					<div>
						<h3 className='mb-4 font-semibold'>Special Thanks</h3>
						<div className='flex flex-col space-y-2 text-sm'>
							<a
								href='https://react.dev/'
								className='flex items-center gap-x-3'
								rel='noopener noreferrer'
								target='_blank'
							>
								React
								<ReactIcon className='size-6' />
							</a>
							<a
								href='https://react.dev/'
								className='flex items-center gap-x-3'
								rel='noopener noreferrer'
								target='_blank'
							>
								Vercel
								<VercelIcon className='size-6' />
							</a>
							<a
								href='https://vercel.com/'
								className='flex items-center gap-x-3'
								rel='noopener noreferrer'
								target='_blank'
							>
								TMDB
								<TmdbIcon className='size-6' />
							</a>
						</div>
					</div>
				</div>
			</Container>
			<div className='border-mode-accent border-t py-6 text-center'>
				<Container>
					<p className='text-muted-foreground text-sm'>
						© {new Date().getFullYear()} Movies. All rights reserved.
					</p>
				</Container>
			</div>
		</footer>
	)
}

export { Footer }
