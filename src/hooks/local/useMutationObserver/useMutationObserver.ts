import { useFreshRef } from '@/hooks/local/useFreshRef/useFreshRef'
import { useEffect } from 'react'

type UseMutationObserverProps<T extends HTMLElement> = {
	node: T | null
	callback: MutationCallback
	options: MutationObserverInit
}

function useMutationObserver<T extends HTMLElement>(props: UseMutationObserverProps<T>) {
	const { node, callback, options } = props

	const freshCallback = useFreshRef(callback)
	const freshOptions = useFreshRef(options)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!node) return undefined

		const observer = new MutationObserver(freshCallback.current)

		observer.observe(node, freshOptions.current)

		return () => {
			observer.disconnect()
		}
	}, [node])
}

export { useMutationObserver }
