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
  component?: RouteConfig['component'] | React.FunctionComponent<Props>
}

const routes: CopyRouteConfig[] = [
  { path: '/', exact: true, render: () => <Redirect to={'/defalut/home'} /> },
  {
    path: '/defalut',
    component: Layout,
    routes: [
      {
        path: '/defalut/home',
        component: lazy(() => import('/@/views/Home')),
      },
      {
        path: '/defalut/users',
        component: lazy(() => import('/@/views/Users')),
      },
    ],
  },
]

export default routes
