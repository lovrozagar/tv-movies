import { Button } from '@/modules/focusable'
import { useWatchLaterStore } from '@/stores'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type WatchLaterButtonProps = {
	children: (props: { isSaved: boolean }) => ReactNode
	movieId: number
	className?: string
}

const WatchLaterButton = (props: WatchLaterButtonProps) => {
	const { children, movieId, className } = props

	const movieIds = useWatchLaterStore((store) => store.movieIds)
	const toggleMovieId = useWatchLaterStore((store) => store.toggleMovieId)

	const isSaved = movieIds?.includes(movieId)

	return (
		<Button
			className={clsx(
				'mt-4 xs:mt-0 ml-0 xs:ml-4 flex min-h-[40px] flex-1 items-center justify-center gap-x-2 bg-mode-800 px-8 font-medium text-mode-200 dark:bg-mode-900',
				className,
			)}
			onPress={() => toggleMovieId(movieId)}
		>
			{typeof children === 'function' ? children({ isSaved }) : children}
		</Button>
	)
}

export { WatchLaterButton }
