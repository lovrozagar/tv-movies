import { useFreshRef } from '@/hooks/local/useFreshRef/useFreshRef'
import { useCallback, useEffect, useRef } from 'react'

type UseTimeoutProps = {
	delay: number
	callback: () => void
}

/**
 * Timeout that is automatically cleared on unmount, exposed call and clear methods.
 */
function useTimeout(props: UseTimeoutProps) {
	const { delay, callback } = props

	const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

	const freshCallback = useFreshRef(callback)

	/* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern */
	const call = useCallback(() => {
		if (timeoutIdRef.current === null) {
			timeoutIdRef.current = setTimeout(() => {
				freshCallback.current()
				timeoutIdRef.current = null
			}, delay)
		}
	}, [delay])

	const clear = useCallback(() => {
		if (timeoutIdRef.current !== null) {
			clearTimeout(timeoutIdRef.current)
			timeoutIdRef.current = null
		}
	}, [])

	useEffect(() => {
		return () => clear()
	}, [clear])

	return { call, clear }
}

export { useTimeout }
