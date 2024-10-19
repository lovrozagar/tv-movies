import '@/style/globals.css'
import { queryClient } from '@/utils'
import { QueryClientProvider } from '@tanstack/react-query'

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div />
		</QueryClientProvider>
	)
}

export { App }
