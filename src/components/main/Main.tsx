import { cn } from '@/utils'
import type { ReactNode } from 'react'

type MainProps = {
	children: ReactNode
	className?: string
}

const Main = (props: MainProps) => {
	const { children, className } = props

	return (
		<main
			className={cn(
				'mx-auto w-full flex-1 px-4 pb-20 md:px-6 lg:px-8 2xl:max-w-screen-2xl',
				className,
			)}
		>
			{children}
		</main>
	)
}

export { Main }
