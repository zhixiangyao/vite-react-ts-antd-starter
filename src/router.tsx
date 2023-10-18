import { Spin } from 'antd'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const Layout = lazy(() => import('/@/layout').then(({ Layout }) => ({ default: Layout })))
const RegistrantListPage = lazy(() =>
  import('./pages/registrant-list').then(({ RegistrantListPage }) => ({
    default: RegistrantListPage,
  })),
)
const TestPage = lazy(() => import('./pages/test').then(({ TestPage }) => ({ default: TestPage })))

const routes = [
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
          <Suspense fallback={<>loading RegistrantListPage</>}>
            <RegistrantListPage />
          </Suspense>
        ),
      },
      {
        path: '/test',
        element: (
          <Suspense fallback={<>loading RegistrantListPage</>}>
            <TestPage />
          </Suspense>
        ),
      },
      {
        path: '/*',
        element: <div>Not Found</div>,
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

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
