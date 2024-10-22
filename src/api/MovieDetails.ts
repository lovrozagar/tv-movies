type MovieDetails = {
	adult: boolean
	backdrop_path: string | null
	belongs_to_collection: null | {
		id: number
		name: string
		poster_path: string | null
		backdrop_path: string | null
	}
	budget: number
	genres: {
		id: number
		name: string
	}[]
	homepage: string
	id: number
	imdb_id: string | null
	origin_country: string[]
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	production_companies: {
		id: number
		logo_path: string | null
		name: string
		origin_country: string
	}[]
	production_countries: {
		iso_3166_1: string
		name: string
	}[]
	release_date: string
	revenue: number
	runtime: number | null
	spoken_languages: {
		english_name: string
		iso_639_1: string
		name: string
	}[]
	status: string
	tagline: string | null
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	credits: {
		cast: {
			adult: boolean
			credit_id: string
			department: string
			gender: number
			id: number
			job: string
			known_for_department: string
			name: string
			original_name: string
			popularity: number
			profile_path: string | null
		}[]
		crew: {
			adult: boolean
			credit_id: string
			department: string
			gender: number
			id: number
			job: string
			known_for_department: string
			name: string
			original_name: string
			popularity: number
			profile_path: string | null
		}
	}
	videos: {
		results: {
			id: string
			name: string
			key: string
		}[]
	}
}

export type { MovieDetails }
