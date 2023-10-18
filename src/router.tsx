import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Spin } from 'antd'

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('/@/layout').then(({ Layout }) => ({ Component: Layout })),
    children: [
      {
        path: '/registrant-list',
        lazy: () =>
          import('./pages/registrant-list').then(({ RegistrantListPage }) => ({
            Component: RegistrantListPage,
          })),
      },
      {
        path: '/test',
        lazy: () => import('./pages/test').then(({ TestPage }) => ({ Component: TestPage })),
      },
      {
        path: '/*',
        element: <div>Not Found</div>,
      },
    ],
  },
])

export const Router = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <Spin className="absolute left-2/4 top-2/4 translate-x-[-50%,-50%]" spinning />
      }
    />
  )
}
