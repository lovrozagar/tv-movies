import { ROUTES } from '@/router/routes'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{ROUTES.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={
							<Suspense>
								<route.Component />
							</Suspense>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}

export { Router }
