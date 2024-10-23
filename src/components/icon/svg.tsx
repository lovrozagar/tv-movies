import type { ComponentPropsWithRef } from 'react'

type SvgProps = ComponentPropsWithRef<'svg'>

const Svg = (props: SvgProps) => {
	return <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' {...props} />
}

export type { SvgProps }

export { Svg }
