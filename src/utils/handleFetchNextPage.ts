import { PAGE_SIZE } from '@/constants'
import type { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'

type HandleFetchNextPage<T> = {
	response: UseInfiniteQueryResult<InfiniteData<T, unknown>, Error>
	index: number
}

function handleFetchNextPage<T>(props: HandleFetchNextPage<T>) {
	const { response, index } = props

	const realIndex = index + 1

	if (realIndex % PAGE_SIZE !== 0) return

	response.fetchNextPage()
}

export { handleFetchNextPage }
