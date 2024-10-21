import { useEffect } from 'react'

type UseDocumentTitleProps = {
	title: string | undefined
}

function useDocumentTitle(props: UseDocumentTitleProps) {
	const { title } = props

	useEffect(() => {
		if (!title) return

		document.title = title

		return () => {
			document.title = 'Movies'
		}
	}, [title])
}

export { useDocumentTitle }
