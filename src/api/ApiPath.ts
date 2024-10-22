type ApiPath =
	| `/movie/${number}?append_to_response=videos,credits`
	| `/discover/movie?with_genres=${number}&page=${number}`

export type { ApiPath }
