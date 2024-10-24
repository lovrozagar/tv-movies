import type { Page } from '@/api'

function getNextPageParam<T>(data: Page<T>) {
	const isLastPage = data.page === data.total_pages

	return isLastPage ? undefined : data.page + 1
}

export { getNextPageParam }
