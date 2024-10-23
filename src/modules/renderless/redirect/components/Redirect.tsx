import type { NavigationPath } from '@/type'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type RedirectProps = {
	path?: NavigationPath
}

const Redirect = (props: RedirectProps) => {
	const { path } = props

	const navigate = useNavigate()

	useEffect(() => {
		navigate(path ?? '/')
	}, [navigate, path])

	return null
}

export { Redirect }
