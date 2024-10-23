class FetchError extends Error {
	status: number
	responseText: string

	constructor(status: number, message: string, responseText: string) {
		super(message)
		this.status = status
		this.responseText = responseText
		this.name = 'FetchError'
	}
}

export { FetchError }
