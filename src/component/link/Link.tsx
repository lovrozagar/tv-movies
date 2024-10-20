import { cn } from '@/utils'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'

/* foward button props, use onPress as isomorphic press handler between different inputs */
type LinkProps = RouterLinkProps & {
	onPress?: () => void
}

const Link = (props: LinkProps) => {
	const { className, onPress, ...restProps } = props

	const { ref, focused } = useFocusable({
		onEnterPress: onPress,
	})

	const handleNativeEnterKeydown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
		if (focused || event.key !== 'Enter') return

		onPress?.()
	}

	return (
		<RouterLink
			ref={ref}
			data-focused={focused}
			type='button'
			onClick={onPress}
			onKeyDown={handleNativeEnterKeydown}
			className={cn(
				/* base */
				'text-mode-500 outline-none ring-primary transition-[color,background-color,box-shadow] duration-150',
				/* spatial navigation focus */
				'data-[focused=true]:bg-mode-800 data-[focused=true]:text-white',
				/* keyboard focus */
				'focus-visible:ring-2 focus-visible:ring-offset-0',
				/* mouse hover */
				'hover:bg-mode-800 hover:text-white',
				className,
			)}
			{...restProps}
		/>
	)
}

export { Link }
