import { useEffect } from 'react'

const BASE_TITLE = 'Movies'

type UseDocumentTitleProps = {
	title: string | undefined
}

function useDocumentTitle(props: UseDocumentTitleProps) {
	const { title } = props

	useEffect(() => {
		if (!title) return

		document.title = `${title} | ${BASE_TITLE}`

		return () => {
			document.title = BASE_TITLE
		}
	}, [title])
}

export { useDocumentTitle }
