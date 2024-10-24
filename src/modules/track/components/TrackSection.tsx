import { SCROLLABLE_TRACK_DATASET } from '@/constants'
import type { TrackType } from '@/modules/track/types/TrackType'
import type { ReactNode } from 'react'

type TrackSectionProps = {
	type: TrackType
	children: ReactNode
}

const TrackSection = (props: TrackSectionProps) => {
	const { type, children } = props

	const typeProps = type === 'row' ? { [SCROLLABLE_TRACK_DATASET]: true } : undefined

	return (
		<section {...typeProps} className='overflow-x-hidden p-1.5'>
			{children}
		</section>
	)
}

export { TrackSection }
