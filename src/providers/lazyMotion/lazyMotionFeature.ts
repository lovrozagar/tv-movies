async function lazyMotionFeature() {
	const domAnimation = (await import('@/providers/lazyMotion/domAnimation'))?.default

	return domAnimation
}

export { lazyMotionFeature }
