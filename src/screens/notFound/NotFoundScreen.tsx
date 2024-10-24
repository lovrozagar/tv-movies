import { Button } from '@/modules/focusable'
import { BackNavigator } from '@/modules/renderless'
import { useNavigate } from 'react-router-dom'

const NotFoundScreen = () => {
	const navigate = useNavigate()

	return (
		<>
			<BackNavigator />

			<main className='relative top-0 left-0 flex flex-1 items-center justify-center bg-background px-4'>
				<div className='flex flex-col items-center'>
					<h2 className='mb-4 font-bold text-4xl text-red-500'>Not found</h2>
					<p className='mb-8 text-balance text-center font-roboto text-gray-900 text-lg lg:max-w-[600px] dark:text-gray-300'>
						The page you are looking for does not exist, please go back.
					</p>
					<Button
						autoFocus
						className='h-[40px] w-[300px] rounded-lg bg-mode-900 text-mode-100'
						onPress={() => navigate(-1)}
					>
						Go back
					</Button>
				</div>
			</main>
		</>
	)
}

export { NotFoundScreen }
