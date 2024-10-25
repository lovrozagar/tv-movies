type ApiPath =
  | `/movie/${number}?append_to_response=videos,credits`
  | `/movie/${number}/recommendations?page=${number}`
  | `/discover/movie?with_genres=${number}&page=${number}`
  | `/movie/now_playing?page=${number}`
  | `/movie/popular?page=${number}`
  | `/movie/top_rated?page=${number}`
  | `/movie/upcoming?page=${number}`
  | `/search/movie?query=${string}&page=1`

export type { ApiPath }
