function getYoutubeVideoBaseUrl(videoKey: string) {
	return `https://www.youtube.com/embed/${videoKey}?enablejsapi=1`
}

export { getYoutubeVideoBaseUrl }
