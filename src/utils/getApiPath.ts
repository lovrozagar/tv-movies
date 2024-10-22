/* type safe api path getter, development path safety without increasing the bundle size */

import type { ApiPath } from '@/api'

function getApiPath(input: ApiPath) {
	return input
}

export { getApiPath }
