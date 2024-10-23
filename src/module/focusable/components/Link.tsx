import {
	type UseSpatialNavigationProps,
	useSpatialNavigation,
} from '@/module/focusable/hooks/useSpatialNavigation'
import { FOCUSABLE_CLASSNAMES } from '@/module/focusable/styles/focusableClassNames'
import { cn } from '@/utils'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'

/* foward button props, use onPress as isomorphic press handler between different inputs */
type LinkProps = RouterLinkProps & UseSpatialNavigationProps

const Link = (props: LinkProps) => {
	const {
		className,
		onPress,
		onFocus,
		autoFocus = false,
		upArrow = true,
		rightArrow = true,
		downArrow = true,
		leftArrow = true,
		...restProps
	} = props

	const focusable = useSpatialNavigation({
		autoFocus,
		upArrow,
		rightArrow,
		downArrow,
		leftArrow,
	})

	return (
		<RouterLink
			ref={focusable.ref}
			data-focused={focusable.focused}
			onClick={onPress}
			onKeyDownCapture={focusable.handleNativeEnterKeydown}
			className={cn(...FOCUSABLE_CLASSNAMES, className)}
			{...restProps}
		/>
	)
}

export { Link }
