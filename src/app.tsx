import '@/style/globals.css'

import { Navbar } from '@/module/navbar'
import { LazyMotionProvider } from '@/provider'
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
			<LazyMotionProvider>
				<Navbar />
				<Router />
			</LazyMotionProvider>
		</QueryClientProvider>
	)
}

export { App }
