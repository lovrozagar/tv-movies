import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { type ReactNode, useEffect, useId } from 'react'

type FocusProviderProps = {
	/* biome-ignore lint/suspicious/noExplicitAny: allow maximally generic ref */
	children: (props: { ref: React.RefObject<any> }) => ReactNode
	autofocus?: boolean
}

const FocusProvider = (props: FocusProviderProps) => {
	const { children, autofocus = false } = props

	const id = useId()

	const { ref, focusKey, focusSelf } = useFocusable({ focusKey: id })

	/* focus navbar initially */
	useEffect(() => {
		if (!autofocus) return

		focusSelf()
	}, [autofocus, focusSelf])

	return <FocusContext.Provider value={focusKey}>{children({ ref })}</FocusContext.Provider>
}

export { FocusProvider }
