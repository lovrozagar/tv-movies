import { Container } from '@/components/container'
import { FooterLink } from '@/modules/footer/components/FooterLink'
import {
	FOOTER_QUICK_LINK_ITEMS,
	FOOTER_SPECIAL_THANKS_LINK_ITEMS,
	FOOTER_SUPPORT_LINK_ITEMS,
} from '@/modules/footer/constants/footerLinkItems'

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
							{FOOTER_QUICK_LINK_ITEMS.map((item) => (
								<li key={item.href}>
									<FooterLink to={item.href}>{item.name}</FooterLink>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='mb-4 font-semibold'>Support (maintenance)</h3>
						<ul className='space-y-2 text-sm'>
							{FOOTER_SUPPORT_LINK_ITEMS.map((item) => (
								<li key={item}>
									<FooterLink to={'/'}>{item}</FooterLink>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='mb-4 font-semibold'>Special Thanks</h3>
						<ul className='flex flex-col space-y-2 text-sm'>
							{FOOTER_SPECIAL_THANKS_LINK_ITEMS.map((item) => (
								<li key={item.href}>
									<FooterLink to={item.href}>
										<span>{item.name}</span>
										<item.Icon className='size-6' />
									</FooterLink>
								</li>
							))}
						</ul>
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
