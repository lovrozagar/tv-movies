import {
	type UseSpatialNavigationProps,
	useSpatialNavigation,
} from '@/module/focusable/hooks/useSpatialNavigation'
import { FOCUSABLE_CLASSNAMES } from '@/module/focusable/styles/focusableClassNames'
import { cn } from '@/utils'
import type { ComponentPropsWithoutRef } from 'react'

/* foward button props, use onPress as isomorphic press handler between different inputs */
type ButtonProps = ComponentPropsWithoutRef<'button'> & UseSpatialNavigationProps

const Button = (props: ButtonProps) => {
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
		<button
			type='submit'
			ref={focusable.ref}
			data-focused={focusable.focused}
			onClick={onPress}
			onKeyDownCapture={focusable.handleNativeEnterKeydown}
			className={cn(...FOCUSABLE_CLASSNAMES, className)}
			{...restProps}
		/>
	)
}

export { Button }
