import { Button } from '@/component/button'
import { MoonIcon, SunIcon } from '@/component/icon'
import { useMutationObserver } from '@/hook/local/useMutationObserver'
import { DOCUMENT_MODE_ATTRIBUTE_KEY } from '@/module/navbar/constant/mode'
import type { Mode } from '@/module/navbar/type/mode'
import {
	getDocumentMode,
	getLocalDocumentMode,
	setDocumentMode,
	setLocalDocumentMode,
	toggleDocumentMode,
} from '@/module/navbar/util/mode'
import { useLayoutEffect, useState } from 'react'

const ModeSwitch = () => {
	/* initially read local document mode, if exists sync to state, else return system preference */
	const [mode, setMode] = useState<Mode>(() => {
		const localMode = getLocalDocumentMode()

		if (localMode) return localMode

		return getDocumentMode()
	})

	/* read local document mode, if it exists, append mode to document just before rendering */
	useLayoutEffect(() => {
		const localMode = getLocalDocumentMode()

		if (!localMode) return

		setDocumentMode(localMode)
	}, [])

	/* react to document mode dataset change */
	useMutationObserver({
		node: document.documentElement,
		options: { attributes: true, attributeFilter: [DOCUMENT_MODE_ATTRIBUTE_KEY] },
		callback: () => {
			const mode = getDocumentMode()

			setMode(mode)
			setLocalDocumentMode(mode)
		},
	})

	return (
		<Button onPress={toggleDocumentMode}>
			{mode === 'light' ? <MoonIcon className='size-6' /> : <SunIcon className='size-6' />}
		</Button>
	)
}

export { ModeSwitch }
