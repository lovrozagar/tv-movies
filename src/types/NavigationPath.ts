type NavigationPath =
	| '/'
	| `/movie/${number}`
	| `/movie/${number}/player`
	| '/watch-later'
	| 'search'

export type { NavigationPath }
