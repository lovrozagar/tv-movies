import { cn } from '@/utils'

type SkeletonProps = {
	className?: string
}

const Skeleton = (props: SkeletonProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				'relative isolate w-full overflow-hidden rounded bg-mode-accent before:absolute before:inset-0 before:z-[1] before:inline-block before:animate-[slide_1500ms_ease_infinite] before:rounded-[inherit] before:bg-gradient-to-r before:from-transparent before:via-mode-750 before:to-transparent before:content-[""]',
				className,
			)}
		/>
	)
}

export { Skeleton }
