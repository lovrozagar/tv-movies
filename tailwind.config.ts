import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['selector', '[data-theme="dark"]'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
}

export default config
