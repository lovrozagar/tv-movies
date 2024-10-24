import { cn } from '@/utils'
import { type ReactNode, useLayoutEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type TrackObserverProps = {
	enabled: boolean
	children: ReactNode
	className?: string
}

const TrackObserver = (props: TrackObserverProps) => {
	const { enabled, children, className } = props

	const observer = useInView({ skip: !enabled })

	const [shouldRenderChildren, setShouldRenderChildren] = useState(!enabled)

	useLayoutEffect(() => {
		if (!observer.inView) return

		setShouldRenderChildren(true)
	}, [observer.inView])

	return (
		<div ref={observer.ref} className={cn('min-h-[411px]', className)}>
			{shouldRenderChildren ? children : null}
		</div>
	)
}

export { TrackObserver }
