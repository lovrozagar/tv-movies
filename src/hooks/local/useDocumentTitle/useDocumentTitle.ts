import { BASE_DOCUMENT_TITLE } from '@/constants'
import { useEffect } from 'react'

type UseDocumentTitleProps = {
	title: string | undefined
}

function useDocumentTitle(props: UseDocumentTitleProps) {
	const { title } = props

	useEffect(() => {
		if (!title) return

		document.title = `${title} | ${BASE_DOCUMENT_TITLE}`

		return () => {
			document.title = BASE_DOCUMENT_TITLE
		}
	}, [title])
}

export { useDocumentTitle }
