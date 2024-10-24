const FOCUSABLE_CLASSNAMES = [
	/* base */
	'relative inline-block text-mode-500 outline-none transition-[color,background-color] duration-150 before:absolute before:top-0 before:left-0 before:z-[1] before:inline-block before:size-full before:ring-primary before:transition-[box-shadow] before:duration-150',
	/* spatial navigation focus */
	'before:ring-offset-[3px] data-[focused=true]:text-foreground data-[focused=true]:before:ring [&]:before:ring-offset-background',
	/* keyboard focus */
	'focus-visible:text-foreground before:focus-visible:ring before:focus-visible:ring-offset-[3px]',
	/* mouse hover */
	'hover:text-foreground',
] as const

export { FOCUSABLE_CLASSNAMES }
