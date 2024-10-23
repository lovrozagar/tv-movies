import { lazyMotionFeature } from '@/providers/lazyMotion/lazyMotionFeature'
import { LazyMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type LazyMotionProviderProps = {
	children: ReactNode
}

const LazyMotionProvider = (props: LazyMotionProviderProps) => {
	const { children } = props

	return <LazyMotion features={lazyMotionFeature}>{children}</LazyMotion>
}

export { LazyMotionProvider }
