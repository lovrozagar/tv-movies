import { Link, type LinkProps } from '@/modules/focusable'

type FooterLinkProps = Pick<LinkProps, 'to' | 'children'> & {
	external?: boolean
}

const FooterLink = (props: FooterLinkProps) => {
	const { to, children, external } = props

	return (
		<Link
			to={to}
			className='flex gap-x-2 text-mode-300'
			rel={external ? 'noopener noreferrer' : undefined}
			target={external ? '_blank' : undefined}
		>
			{children}
		</Link>
	)
}

export { FooterLink }
