import type { QueryKey } from '@/types'

/* type safe query key getter, development key safety without increasing the bundle size */

function getQueryKey(input: QueryKey) {
	return input
}

export { getQueryKey }
