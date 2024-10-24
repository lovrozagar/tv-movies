import type { TrackType } from '@/modules/track/types/TrackType'
import { cn } from '@/utils'
import type { ReactNode } from 'react'

type TrackListProps = {
	type: TrackType
	children: ReactNode
}

const TrackList = (props: TrackListProps) => {
	const { children, type } = props

	return (
		<ul
			className={cn(
				'mt-5 gap-x-6',
				type === 'row' ? 'flex' : undefined,
				type === 'wrap'
					? 'grid grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))] gap-y-6 py-1'
					: undefined,
			)}
		>
			{children}
		</ul>
	)
}

export { TrackList }
