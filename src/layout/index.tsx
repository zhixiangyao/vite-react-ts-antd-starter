import React, { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import Main from '/@/layout/components/Main'
import Side from '/@/layout/components/Side'

const Layout: React.FC = () => {
  const location = useLocation()
  const [width] = useState(256)
  const [collapsed] = useState(false)

  if (location.pathname === '/') {
    return <Navigate replace to={'/registrant-list'} />
  }

  return (
    <>
      <Side style={{ width }} collapsed={collapsed} />

      <Main style={{ width: `calc(100vw - ${width}px)` }} className="inline">
        <Outlet />
      </Main>
    </>
  )
}

export default Layout
