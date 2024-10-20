import { Navbar } from '@/module/navbar/component/navbar'
import '@/style/globals.css'
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
		</QueryClientProvider>
	)
}

export { App }
