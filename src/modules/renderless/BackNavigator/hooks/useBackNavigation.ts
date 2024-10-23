import { useEventListener } from '@/hooks/local'
import { useLocation, useNavigate } from 'react-router-dom'

function useBackNavigation() {
	const navigate = useNavigate()
	const location = useLocation()

	useEventListener({
		event: 'keydown',
		handler: (event: KeyboardEvent) => {
			const activeElement = document.activeElement

			const isInputFocused =
				activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement

			if (isInputFocused) return

			if (location.pathname === '/') return

			if (event.key === 'Backspace' || event.key === 'SoftLeft') {
				event.preventDefault()
				navigate(-1)
			}
		},
	})
}

export { useBackNavigation }
