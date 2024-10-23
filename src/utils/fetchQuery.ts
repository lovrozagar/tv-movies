import { FetchError } from '@/classes'
import { ENV } from '@/env'

/* simple type safe fetch wrapper, good enough for this project... */
/* ...no need to increase the bundle size with a third party package */

type FetchQueryProps<_T, K extends RequestInit = RequestInit> = {
	path: string
} & K

async function fetchQuery<T, K extends RequestInit = RequestInit>(
	props: FetchQueryProps<T, K>,
): Promise<T> {
	const { path, ...options } = props

	const response = await fetch(`${ENV.TMBD_BASE_URL}${path}`, {
		method: 'GET',
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

	return response.json() as Promise<T>
}

export { fetchQuery }
