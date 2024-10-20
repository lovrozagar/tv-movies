import { cn } from '@/utils'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import type { ComponentPropsWithoutRef } from 'react'

/* foward button props, use onPress as isomorphic press handler between different inputs */
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
	onPress?: () => void
}

const Button = (props: ButtonProps) => {
	const { className, onPress, ...restProps } = props

	const { ref, focused } = useFocusable({
		onEnterPress: onPress,
	})

	const handleNativeEnterKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (focused || event.key !== 'Enter') return

		onPress?.()
	}

	return (
		<button
			ref={ref}
			data-focused={focused}
			type='button'
			onClick={onPress}
			onKeyDown={handleNativeEnterKeydown}
			className={cn(
				/* base */
				'rounded px-4 py-2 text-mode-500 outline-none ring-primary transition-[color,background-color,box-shadow] duration-150',
				/* spatial navigation focus */
				'data-[focused=true]:bg-mode-800 data-[focused=true]:text-white',
				/* keyboard focus */
				'focus-visible:ring',
				className,
			)}
			{...restProps}
		/>
	)
}

export { Button }
