import type { ReactNode } from 'react'

type TrackListProps = {
	children: ReactNode
}

const TrackList = (props: TrackListProps) => {
	const { children } = props

	return <ul className='mt-3 flex gap-x-6'>{children}</ul>
}

export { TrackList }
