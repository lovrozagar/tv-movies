async function lazyMotionFeature() {
	const domAnimation = (await import('@/provider/lazyMotion/domAnimation'))?.default

	return domAnimation
}

export { lazyMotionFeature }
