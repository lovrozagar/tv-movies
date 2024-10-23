import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type WatchLaterStore = {
	movieIds: number[]
	toggleMovieId: (id: number) => void
}

const useWatchLaterStore = create<WatchLaterStore>()(
	persist(
		(set) => ({
			movieIds: [],
			toggleMovieId: (id) =>
				set((state) => ({
					movieIds: state.movieIds.includes(id)
						? state.movieIds.filter((movieId) => movieId !== id)
						: [...state.movieIds, id],
				})),
		}),
		{
			name: 'favorite-movie-list',
			storage: createJSONStorage(() => localStorage),
		},
	),
)

export { useWatchLaterStore, type WatchLaterStore }
