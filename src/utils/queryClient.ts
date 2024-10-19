import { QueryClient } from '@tanstack/react-query'

/* react query client with sane caching options for a movie app */

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10 * 60 * 1000 /* 10 mins */,
			gcTime: 15 * 60 * 1000 /* 15 mins */,
			retry: 1,
			refetchOnReconnect: true,
			placeholderData: (prev: unknown) => prev,
		},
	},
})

export { queryClient }
