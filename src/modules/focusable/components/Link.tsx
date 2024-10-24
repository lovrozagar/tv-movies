import {
	type UseSpatialNavigationProps,
	useSpatialNavigation,
} from '@/modules/focusable/hooks/useSpatialNavigation'
import { FOCUSABLE_CLASSNAMES } from '@/modules/focusable/styles/focusableClassNames'
import { cn } from '@/utils'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'

/* foward button props, use onPress as isomorphic press handler between different inputs */
type LinkProps = RouterLinkProps & Partial<Omit<UseSpatialNavigationProps, 'type'>>

const Link = (props: LinkProps) => {
	const {
		onPress,
		onFocus,
		className,
		autoFocus = false,
		scrollable = false,
		disabledArrows = [],
		...restProps
	} = props

	const focusable = useSpatialNavigation({
		type: 'link',
		autoFocus,
		disabledArrows,
		scrollable,
		onPress,
		onFocus,
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

export { Link, type LinkProps }
