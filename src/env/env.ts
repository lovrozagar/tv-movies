import { EnvError } from '@/class'

const rawEnvVariables = [
	{
		name: 'TMBD_BASE_URL',
		value: import.meta.env.VITE_TMDB_BASE_URL,
	},
	{
		name: 'TMDB_PICTURE_URL',
		value: import.meta.env.VITE_TMDB_PICTURE_URL,
	},
	{
		name: 'TMBD_API_KEY',
		value: import.meta.env.VITE_TMDB_API_KEY,
	},
	{
		name: 'TMDB_READ_ACCESS_TOKEN',
		value: import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN,
	},
] as const

/* Runtime env validation */

const validatedEnvVariables = Object.fromEntries(
	rawEnvVariables.map(({ name, value }) => {
		if (!value || typeof value !== 'string') {
			throw new EnvError(name)
		}

		return [name, value] as const
	}),
)

/* Export type-safe env record */

const ENV = {
	TMBD_BASE_URL: validatedEnvVariables.TMBD_BASE_URL,
	TMDB_PICTURE_URL: validatedEnvVariables.TMDB_PICTURE_URL,
	TMBD_API_KEY: validatedEnvVariables.TMBD_API_KEY,
	TMDB_READ_ACCESS_TOKEN: validatedEnvVariables.TMDB_READ_ACCESS_TOKEN,
}

export { ENV }
