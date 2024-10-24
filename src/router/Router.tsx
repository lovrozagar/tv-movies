import { Loader } from '@/components/loader'
import { Layout } from '@/router/Layout'
import { ROUTES } from '@/router/routes'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					{ROUTES.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={
								<Suspense fallback={<Loader />}>
									<route.Component />
								</Suspense>
							}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export { Router }
