import { useEffect, useRef } from 'react'

function useFreshRef<T>(value: T) {
	const ref = useRef(value)

	useEffect(() => {
		ref.current = value
	}, [value])

	return ref
}

export { useFreshRef }
