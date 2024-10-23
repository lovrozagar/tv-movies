import { Button } from '@/module/focusable'
import { BackNavigator } from '@/module/renderless'
import { cn } from '@/utils'

type ErrorProps = {
	error: string
	className?: string | undefined
}

const Error = (props: ErrorProps) => {
	const { className = 'h-screen', error } = props

	return (
		<>
			<BackNavigator />

			<main
				className={cn(
					'relative top-0 left-0 flex flex-1 items-center justify-center bg-mainColor px-4 dark:bg-black',
					className,
				)}
			>
				<div className='flex flex-col items-center'>
					<h1 className='mb-4 font-bold text-4xl text-red-500'>An error ocurred</h1>
					<p className='mb-8 text-balance text-center font-roboto text-gray-900 text-lg lg:max-w-[600px] dark:text-gray-300'>
						{error}
					</p>
					<Button
						autoFocus
						className='h-[40px] w-[300px] rounded-lg bg-mode-900 text-mode-100'
						onPress={() => window.location.reload()}
					>
						Try again
					</Button>
				</div>
			</main>
		</>
	)
}

export { Error }
