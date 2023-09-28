import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

const Layout = lazy(() => import('/@/layout'))
const RegistrantList = lazy(() => import('/@/views/RegistrantList'))

const routes: Route[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<>loading Layout</>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/registrant-list',
        element: (
          <Suspense fallback={<>loading RegistrantList</>}>
            <RegistrantList />
          </Suspense>
        ),
        children: [],
      },
      {
        path: '/*',
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

const Routes = () => {
  const element = useRoutes(routes)

  return element
}

export default () => (
  <Router>
    <Routes />
  </Router>
)
