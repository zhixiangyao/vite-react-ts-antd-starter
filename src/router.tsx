import { Spin } from 'antd'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

const Layout = lazy(() => import('/@/layout'))
const RegistrantList = lazy(() => import('./pages/RegistrantList'))

const routes: Route[] = [
  {
    path: '/',
    element: (
      <Suspense
        fallback={<Spin className="absolute left-2/4 top-2/4 translate-x-[-50%,-50%]" spinning />}
      >
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

export default () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}
