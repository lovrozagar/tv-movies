import '@/style/globals.css'

import { Navbar } from '@/module/navbar'
import { Router } from '@/router'
import { queryClient } from '@/utils'
import { init } from '@noriginmedia/norigin-spatial-navigation'
import { QueryClientProvider } from '@tanstack/react-query'

/* init spatial navigation */
init({
	debug: false,
	visualDebug: false,
	distanceCalculationMethod: 'center',
})

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Navbar />
			<main className='px-4 py-2'>
				<Router />
			</main>
		</QueryClientProvider>
	)
}

export { App }
