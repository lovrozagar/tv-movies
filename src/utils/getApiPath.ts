import type { ApiPath } from '@/type'

/* type safe api path getter, development path safety without increasing the bundle size */

function getApiPath(input: ApiPath) {
	return input
}

export { getApiPath }
