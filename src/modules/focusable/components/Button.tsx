import {
	type UseSpatialNavigationProps,
	useSpatialNavigation,
} from '@/modules/focusable/hooks/useSpatialNavigation'
import { FOCUSABLE_CLASSNAMES } from '@/modules/focusable/styles/focusableClassNames'
import { cn } from '@/utils'
import type { ComponentPropsWithoutRef } from 'react'

/* foward button props, use onPress as isomorphic press handler between different inputs */
type ButtonProps = ComponentPropsWithoutRef<'button'> &
	Partial<Omit<UseSpatialNavigationProps, 'type'>>

const Button = (props: ButtonProps) => {
	const {
		onPress,
		onFocus,
		className,
		scrollable = false,
		autoFocus = false,
		disabledArrows = [],
		...restProps
	} = props

	const focusable = useSpatialNavigation({
		type: 'button',
		autoFocus,
		disabledArrows,
		scrollable,
		onPress,
		onFocus,
	})

	return (
		<button
			type='button'
			ref={focusable.ref}
			data-focused={focusable.focused}
			onClick={onPress}
			onKeyDownCapture={focusable.handleNativeEnterKeydown}
			className={cn(...FOCUSABLE_CLASSNAMES, className)}
			{...restProps}
		/>
	)
}

export { Button, type ButtonProps }
