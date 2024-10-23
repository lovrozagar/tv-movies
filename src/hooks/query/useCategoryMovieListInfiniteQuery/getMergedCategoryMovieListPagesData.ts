import type { MovieItem, Page } from '@/api'
import type { UseCategoryMovieListInfiniteQueryReturn } from '@/hooks/query/useCategoryMovieListInfiniteQuery/useCategoryMovieListInfiniteQuery'

type GetMergedCategoryMovieListPagesDataProps = {
	responseData: UseCategoryMovieListInfiniteQueryReturn['data']
}

function getMergedCategoryMovieListPagesData(props: GetMergedCategoryMovieListPagesDataProps) {
	const { responseData } = props

	if (!responseData || responseData.pages.length === 0) return undefined

	const lastPage = responseData.pages.at(-1)

	if (!lastPage) return undefined

	const mergedResults = responseData.pages.reduce((accumulator, currentPage) => {
		return accumulator.concat(currentPage.results)
	}, [] as MovieItem[])

	return {
		page: lastPage.page,
		total_pages: lastPage.total_pages,
		total_results: lastPage.total_results,
		results: mergedResults,
	} satisfies Page<MovieItem>
}

type GetMergedCategoryMovieListPagesDataReturn = ReturnType<
	typeof getMergedCategoryMovieListPagesData
>

export { getMergedCategoryMovieListPagesData, type GetMergedCategoryMovieListPagesDataReturn }
