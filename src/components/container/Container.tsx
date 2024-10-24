import { cn } from '@/utils'
import type { ReactNode } from 'react'

type ContainerProps = {
	children: ReactNode
	className?: string
}

const Container = (props: ContainerProps) => {
	const { children, className } = props

	return (
		<div className={cn('mx-auto w-full px-4 md:px-6 lg:px-8 2xl:max-w-screen-2xl', className)}>
			{children}
		</div>
	)
}

export { Container }
