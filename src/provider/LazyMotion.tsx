import { domAnimation, LazyMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type LazyMotionProviderProps = {
	children: ReactNode
}

const LazyMotionProvider = (props: LazyMotionProviderProps) => {
	const { children } = props

	return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

export { LazyMotionProvider }
