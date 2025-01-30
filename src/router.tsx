import { HomeOutlined, RadarChartOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

interface Route {
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
    children: routes.map(route => ({
      path: route.path,
      lazy: () => route.element.then(Component => ({ Component })),
    })),
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
