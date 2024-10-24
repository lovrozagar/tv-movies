import { SCROLLABLE_TRACK_DATASET } from '@/constants'
import { SCROLLABLE_X_OFFSET, SCROLLABLE_Y_OFFSET } from '@/constants/scrollable'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { useEffect, useState } from 'react'

type SpatialNavigationElement = 'button' | 'link'

type DisabledArrow = 'up' | 'right' | 'down' | 'left'

type UseSpatialNavigationProps = {
	onPress: (() => void) | undefined
	onFocus: (() => void) | undefined
	type: SpatialNavigationElement
	scrollable: boolean
	autoFocus: boolean
	disabledArrows: DisabledArrow[] | Readonly<DisabledArrow[]>
}

function useSpatialNavigation(props: UseSpatialNavigationProps) {
	const { onPress, onFocus, type, scrollable, autoFocus, disabledArrows } = props

	/* use to skip on focus on init */
	const [shouldScrollIntoView, setShouldScrollIntoView] = useState(!autoFocus)

	useEffect(() => {
		setTimeout(() => {
			setShouldScrollIntoView(true)
		}, 0)
	}, [])

	const { ref, focused, focusSelf } = useFocusable({
		/* handle spatial navigation focus enter / ok press */
		onEnterPress: () => {
			onPress?.()

			if (type !== 'link') return

			ref.current?.click()
		},
		onFocus: ({ node }) => {
			onFocus?.()

			/* if focus is initial on init instead of chage, return early */
			if (!shouldScrollIntoView) return

			/* calculate y position of focused node */
			const y = node.getBoundingClientRect().top + window.scrollY

			/* smooth scroll window by y axis to node with a custom offset */
			window.scroll({
				top: y - SCROLLABLE_Y_OFFSET,
				behavior: 'smooth',
			})

			/* if consumer has scrollable prop then track scroll should happen, else return early */
			if (!scrollable) return

			/* traverse the thee upwards and find closes scrollable track */
			const scrollableParent = node.closest(`[${SCROLLABLE_TRACK_DATASET}]`)

			if (!scrollableParent) return

			/* calculate x position of focused node in track */
			const x =
				node.getBoundingClientRect().left +
				scrollableParent.scrollLeft -
				scrollableParent.getBoundingClientRect().left

			/* smooth scroll track by x axis to node with a custom offset */
			scrollableParent.scrollTo({
				left: x - SCROLLABLE_X_OFFSET,
				behavior: 'smooth',
			})
		},
		onArrowPress: (arrow) => {
			/* if arrow includes disabled arrows passed, event will be prevented */
			if (disabledArrows.includes(arrow)) return false

			return true
		},
	})

	/* autofocus */
	useEffect(() => {
		if (!autoFocus) return

		focusSelf()
	}, [autoFocus, focusSelf])

	/* native enter / ok keydown */
	const handleNativeEnterKeydown = <T extends HTMLElement>(event: React.KeyboardEvent<T>) => {
		if (focused || event.key !== 'Enter') return

		onPress?.()

		if (type !== 'link') return

		ref.current?.click()
	}

	return {
		ref,
		focused,
		handleNativeEnterKeydown,
	}
}

export { useSpatialNavigation, type UseSpatialNavigationProps }
