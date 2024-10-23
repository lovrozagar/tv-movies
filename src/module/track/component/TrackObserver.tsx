import { type ReactNode, useLayoutEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type TrackObserverProps = {
	children: ReactNode
	enabled: boolean
}

const TrackObserver = (props: TrackObserverProps) => {
	const { children, enabled } = props

	const observer = useInView({ skip: !enabled })

	const [shouldRenderChildren, setShouldRenderChildren] = useState(!enabled)

	useLayoutEffect(() => {
		if (!observer.inView) return

		setShouldRenderChildren(true)
	}, [observer.inView])

	return (
		<div ref={observer.ref} className='min-h-[411px]'>
			{shouldRenderChildren ? children : null}
		</div>
	)
}

export { TrackObserver }
