import type { ReactNode } from 'react'

type TrackSectionProps = {
	children: ReactNode
}

const TrackSection = (props: TrackSectionProps) => {
	const { children } = props

	return <section className='overflow-x-hidden px-4 py-1'>{children}</section>
}

export { TrackSection }
