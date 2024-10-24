import { MoonIcon, SunIcon } from '@/components/icon'
import { useMutationObserver } from '@/hooks/local'
import { Button } from '@/modules/focusable'
import type { ButtonProps } from '@/modules/focusable/components/Button'
import { DOCUMENT_MODE_ATTRIBUTE_KEY } from '@/modules/navbar/constant/mode'
import type { Mode } from '@/modules/navbar/type/mode'
import {
	getDocumentMode,
	getLocalDocumentMode,
	setDocumentMode,
	setLocalDocumentMode,
	toggleDocumentMode,
} from '@/modules/navbar/util/mode'
import { useLayoutEffect, useState } from 'react'

type ModeSwitchProps = Pick<ButtonProps, 'disabledArrows'>

const ModeSwitch = (props: ModeSwitchProps) => {
	const { disabledArrows } = props

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
		<Button className='px-4 py-2' disabledArrows={disabledArrows} onPress={toggleDocumentMode}>
			{mode === 'light' ? <MoonIcon className='size-6' /> : <SunIcon className='size-6' />}
		</Button>
	)
}

export { ModeSwitch }
