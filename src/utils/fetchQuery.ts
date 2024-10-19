import { FetchError } from '@/class'
import { ENV } from '@/env'

/* simple type safe fetch wrapper, good enough for this project... */
/* ...no need to increase the bundle size with a third party package */

type FetchQueryProps<P extends RequestInit, R> = {
	path: string
} & P

async function fetchQuery<P extends RequestInit, R>(props: FetchQueryProps<P, R>): Promise<R> {
	const { path, ...options } = props

	const response = await fetch(`${ENV.TMBD_BASE_URL}${path}`, {
		headers: {
			'Authorization': `Bearer ${ENV.TMDB_READ_ACCESS_TOKEN}`,
			'Accept': 'application/json',
			...options?.headers,
		},
		...options,
	})

	if (!response.ok) {
		const responseText = await response.text()

		throw new FetchError(response.status, response.statusText, responseText)
	}

	return response.json() as Promise<R>
}

export { fetchQuery }
