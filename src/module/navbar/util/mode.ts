import {
	DEFAULT_DOCUMENT_MODE,
	DOCUMENT_MODE_ATTRIBUTE_KEY,
	DOCUMENT_MODE_LOCAL_STORAGE_KEY,
} from '@/module/navbar/constant/mode'
import type { Mode } from '@/module/navbar/type/mode'

function getDocumentMode(): Mode {
	const documentMode = window.document.documentElement.getAttribute(DOCUMENT_MODE_ATTRIBUTE_KEY)

	return documentMode === 'dark' ? 'dark' : 'light'
}

function getToggledDocumentMode(input: string) {
	if (input === 'dark') return 'light'
	if (input === 'light') return 'dark'

	return DEFAULT_DOCUMENT_MODE
}

function toggleDocumentMode() {
	const documentMode = window.document.documentElement.getAttribute(DOCUMENT_MODE_ATTRIBUTE_KEY)

	const toggledDocumentMode = getToggledDocumentMode(documentMode)

	window.document.documentElement.setAttribute(DOCUMENT_MODE_ATTRIBUTE_KEY, toggledDocumentMode)
}

function setDocumentMode(mode: Mode) {
	window.document.documentElement.setAttribute(DOCUMENT_MODE_ATTRIBUTE_KEY, mode)
}

function getLocalDocumentMode(): Mode | undefined {
	try {
		/* JSON.parse can throw, handle error */
		const localStorageDocumentMode = JSON.parse(
			window.localStorage.getItem(DOCUMENT_MODE_LOCAL_STORAGE_KEY),
		)

		if (
			!localStorageDocumentMode ||
			(localStorageDocumentMode !== 'light' && localStorageDocumentMode !== 'dark')
		)
			return undefined

		return localStorageDocumentMode
	} catch {
		return undefined
	}
}

function setLocalDocumentMode(mode: Mode) {
	window.localStorage.setItem(DOCUMENT_MODE_LOCAL_STORAGE_KEY, JSON.stringify(mode))
}

export {
	getDocumentMode,
	getToggledDocumentMode,
	getLocalDocumentMode,
	setDocumentMode,
	setLocalDocumentMode,
	toggleDocumentMode,
}
