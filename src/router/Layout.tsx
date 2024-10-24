import { Footer } from '@/modules/footer'
import { Navbar } from '@/modules/navbar'
import { BackNavigator } from '@/modules/renderless'
import { FocusProvider, LazyMotionProvider } from '@/providers'
import { queryClient } from '@/utils'
import { init } from '@noriginmedia/norigin-spatial-navigation'
import { QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'

/* init spatial navigation */
init({
	debug: false,
	visualDebug: false,
	distanceCalculationMethod: 'center',
})

const Layout = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<LazyMotionProvider>
					<FocusProvider>
						{({ ref }) => (
							<>
								<BackNavigator />

								<div ref={ref} data-focus-container className='flex flex-1 flex-col'>
									<Navbar />
									<Outlet />
									<Footer />
								</div>
							</>
						)}
					</FocusProvider>
				</LazyMotionProvider>
			</QueryClientProvider>
		</>
	)
}

export { Layout }
