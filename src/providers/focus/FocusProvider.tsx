import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { type ReactNode, useEffect } from 'react'

type FocusProviderProps = {
	/* biome-ignore lint/suspicious/noExplicitAny: allow maximally generic ref */
	children: (props: { ref: React.RefObject<any> }) => ReactNode
}

const FocusProvider = (props: FocusProviderProps) => {
	const { children } = props

	const { ref, focusKey, hasFocusedChild, focusSelf } = useFocusable({
		autoRestoreFocus: true,
		isFocusBoundary: true,
		focusable: true,
		forceFocus: true,
	})

	useEffect(() => {
		if (hasFocusedChild) return

		/* if no focus child found in the tree, focus self to focus first focusable */
		focusSelf()
	}, [hasFocusedChild, focusSelf])

	return <FocusContext.Provider value={focusKey}>{children({ ref })}</FocusContext.Provider>
}

export { FocusProvider }
