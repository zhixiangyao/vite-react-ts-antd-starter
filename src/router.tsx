import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Spin } from 'antd'
import { HomeOutlined, RadarChartOutlined } from '@ant-design/icons'

type Route = {
  label: string
  icon: React.ReactNode
  path: string
  element: Promise<React.FC>
}

export const routes: Route[] = [
  {
    label: 'Registrant List',
    path: '/registrant-list',
    icon: <HomeOutlined />,
    element: import('./pages/registrant-list').then(({ RegistrantListPage }) => RegistrantListPage),
  },
  {
    label: 'Test',
    path: '/test',
    icon: <RadarChartOutlined />,
    element: import('./pages/test').then(({ TestPage }) => TestPage),
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('/@/layout').then(({ Layout }) => ({ Component: Layout })),
    hydrateFallbackElement: (
      <Spin className="absolute left-2/4 top-2/4 translate-x-[-50%,-50%]" spinning />
    ),
    children: routes.map((route) => ({
      path: route.path,
      lazy: () => route.element.then((Component) => ({ Component })),
    })),
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
