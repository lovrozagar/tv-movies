import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: string[]) {
	return twMerge(clsx(inputs))
}

export { cn }
