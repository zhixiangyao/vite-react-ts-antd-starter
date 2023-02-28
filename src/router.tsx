import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes as Routes_, Route, Navigate } from 'react-router-dom'

const GenRoute: React.FC<Route> = (route) => {
  if (route.children.length === 0) {
    return <Route key={route.path} path={route.path} element={route.element} />
  } else {
    return (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children.map((route) => GenRoute(route))}
      </Route>
    )
  }
}

const Layout = lazy(() => import('/@/layout'))
const RegistrantList = lazy(() => import('/@/views/RegistrantList'))

const routes: Route[] = [
  {
    path: '/',
    element: <Navigate replace to={'/user/registrant-list'} />,
    children: [],
  },
  {
    path: '/user',
    element: (
      <Suspense fallback={<>loading Layout</>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/user/registrant-list',
        element: (
          <Suspense fallback={<>loading RegistrantList</>}>
            <RegistrantList />
          </Suspense>
        ),
        children: [],
      },
      {
        path: '/user/*',
        element: <div>Not Found</div>,
        children: [],
      },
    ],
  },
  {
    path: '/*',
    element: <div>Not Found</div>,
    children: [],
  },
]

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Routes_>{routes.map((route) => GenRoute(route))}</Routes_>
  </BrowserRouter>
)
