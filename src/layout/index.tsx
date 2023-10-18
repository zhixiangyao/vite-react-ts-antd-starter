import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Layout as AntdLayout } from 'antd'
import clsx from 'clsx'

import { useIsDesktop } from '/@/hooks/useIsDeskTop'
import { Nav } from '/@/layout/components/Nav'
import { Header } from '/@/layout/components/Header'
import { Main } from '/@/layout/components/Main'

export const Layout = () => {
  const location = useLocation()
  const isDesktop = useIsDesktop()

  if (!isDesktop) {
    return (
      <div className="flex h-screen items-center justify-center text-center text-xl">
        Please use a device with a width greater than 1024px to access.
      </div>
    )
  }

  if (location.pathname === '/') {
    return <Navigate replace to={'/registrant-list'} />
  }

  return (
    <AntdLayout className={clsx(!isDesktop && 'hidden')}>
      <Nav />

      <AntdLayout.Content>
        <Header />

        <Main />
      </AntdLayout.Content>
    </AntdLayout>
  )
}
