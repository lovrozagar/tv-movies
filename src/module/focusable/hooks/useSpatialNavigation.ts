import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { useEffect, useState } from 'react'

type UseSpatialNavigationProps = {
	onPress?: () => void
	onFocus?: () => void
	autoFocus?: boolean
	upArrow?: boolean
	rightArrow?: boolean
	downArrow?: boolean
	leftArrow?: boolean
}

function useSpatialNavigation(props: UseSpatialNavigationProps) {
	const {
		onPress,
		onFocus,
		autoFocus = false,
		upArrow = true,
		rightArrow = true,
		downArrow = true,
		leftArrow = true,
	} = props

	const [shouldScrollIntoView, setShouldScrollIntoView] = useState(!autoFocus)

	useEffect(() => {
		setTimeout(() => {
			setShouldScrollIntoView(true)
		}, 0)
	}, [])

	const { ref, focused, focusSelf } = useFocusable({
		onEnterPress: () => {
			onPress?.()
			ref.current?.click()
		},
		onFocus: ({ node }) => {
			onFocus?.()

			if (!shouldScrollIntoView) return

			node.scrollIntoView({ behavior: 'smooth' })
		},
		onArrowPress: (arrow) => {
			switch (arrow) {
				case 'up':
					return upArrow
				case 'right':
					return rightArrow
				case 'down':
					return downArrow
				case 'left':
					return leftArrow
			}

			return true
		},
	})

	useEffect(() => {
		if (!autoFocus) return

		focusSelf()
	}, [autoFocus, focusSelf])

	const handleNativeEnterKeydown = <T extends HTMLElement>(event: React.KeyboardEvent<T>) => {
		if (focused || event.key !== 'Enter') return

		onPress?.()
	}

	return {
		ref,
		focused,
		handleNativeEnterKeydown,
	}
}

export { useSpatialNavigation, type UseSpatialNavigationProps }
