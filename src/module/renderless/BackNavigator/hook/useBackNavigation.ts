import { useFreshRef } from '@/hook/local'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function useBackNavigation() {
	const navigate = useNavigate()
	const location = useLocation()

	const freshNavigate = useFreshRef(navigate)
	const freshPathName = useFreshRef(location.pathname)

	/* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern */
	useEffect(() => {
		const handleBackPress = (event: KeyboardEvent) => {
			const activeElement = document.activeElement

			const isInputFocused =
				activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement

			if (isInputFocused) return

			if (freshPathName.current === '/') return

			if (event.key === 'Backspace' || event.key === 'SoftLeft') {
				event.preventDefault()
				freshNavigate.current(-1)
			}
		}

		window.addEventListener('keydown', handleBackPress)

		return () => {
			window.removeEventListener('keydown', handleBackPress)
		}
	}, [])
}

export { useBackNavigation }
