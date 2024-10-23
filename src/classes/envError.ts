class EnvError extends Error {
	variableName: string

	constructor(variableName: string) {
		super(`Environment variable ${variableName} is missing!`)
		this.variableName = variableName
		this.name = 'EnvError'
	}
}

export { EnvError }
