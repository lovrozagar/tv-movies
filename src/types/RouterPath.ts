type RouterPath =
	| '/'
	| '/movie/:movieIdParam'
	| '/movie/:movieIdParam/player'
	| '/watch-later'
	| '/search'
	| '*'

export type { RouterPath }
