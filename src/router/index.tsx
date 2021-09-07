import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import type { RouteConfig } from 'react-router-config'
import Layout from '/@/layout'

export interface Props {
  route?: {
    routes: RouteConfig['routes']
  }
}

export interface CopyRouteConfig extends RouteConfig {
  component?: RouteConfig['component'] | React.FC<Props>
}

const routes: CopyRouteConfig[] = [
  { path: '/', exact: true, render: () => <Redirect to={'/defalut/registrant-list'} /> },
  {
    path: '/defalut',
    component: Layout,
    routes: [
      {
        path: '/defalut/registrant-list',
        component: lazy(() => import('/@/views/RegistrantList')),
      },
    ],
  },
]

export default routes
