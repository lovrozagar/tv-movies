type NavigationPath =
	| '/'
	| `/movie/${number}`
	| `/movie/${number}/player`
	| '/watch-later'
	| '/search'
	| '/trending'

export type { NavigationPath }
