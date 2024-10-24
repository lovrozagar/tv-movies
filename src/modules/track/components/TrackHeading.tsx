import type { ReactNode } from 'react'

type TrackHeadingProps = {
	children: ReactNode
}

const TrackHeading = (props: TrackHeadingProps) => {
	const { children } = props

	return (
		<h2 className='mb-2 w-fit px-1.5 font-medium text-mode-contrast text-xl tracking-wide'>
			{children}
			<span className='mt-1 block h-[3px] w-full rounded-full bg-primary' />
		</h2>
	)
}

export { TrackHeading }
