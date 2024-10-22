import { StarIcon } from '@/component/icon/star-icon'
import { Image } from '@/component/image'
import { Link } from '@/component/link'
import { useCategoryMovieListQuery } from '@/hook/query'
import { BackNavigator } from '@/module/renderless/BackNavigator'
import { TrackHeading } from '@/module/track/component/TrackHeading'
import { FocusProvider } from '@/provider'
import { getImageSource } from '@/utils'

const HomeScreen = () => {
	const recommendedResponse = useCategoryMovieListQuery({ genreId: 36 })

	const results = recommendedResponse.data?.pages.at(-1)?.results

	return (
		<>
			<BackNavigator />

			<main className='px-4 py-2'>
				<div className='mt-2 text-mode-500 text-sm uppercase'>Home</div>
				<TrackHeading>Recommended</TrackHeading>
				<FocusProvider>
					{({ ref }) => (
						<div ref={ref} className='mt-3 flex gap-x-4'>
							{results?.map((result, index) => (
								<li
									key={result.id}
									className='flex min-w-[200px] flex-1 items-stretch justify-stretch'
								>
									<Link
										key={result.id}
										autoFocus={index === 0}
										to={`/movie/${result.id}`}
										className='flex w-[200px] flex-1 flex-col items-stretch justify-stretch hover:bg-transparent data-[focused=true]:bg-transparent'
									>
										<div className='relative'>
											<Image
												effect
												src={getImageSource({ size: 'w342', path: result.poster_path })}
												alt={result.title}
											/>
											<div className='absolute right-2 bottom-2 flex items-center gap-x-1 rounded-full bg-mode px-2 py-1 text-[0.65rem]'>
												<span>{result.vote_average.toFixed(1)}</span>
												<StarIcon className='size-3' />
											</div>
										</div>
										<p className='mt-1.5 truncate font-medium'>{result.title}</p>
										<p className='truncate font-thin text-[0.75rem]'>{result.overview}</p>
									</Link>
								</li>
							))}
						</div>
					)}
				</FocusProvider>
			</main>
		</>
	)
}

export { HomeScreen }
