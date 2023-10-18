import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Layout as AntdLayout } from 'antd'
import clsx from 'clsx'
import { createGlobalStyle } from 'styled-components'

import { Main } from '/@/layout/components/Main'
import { Nav } from '/@/layout/components/Nav'
import { useIsDesktop } from '/@/hooks/useIsDeskTop'

const GlobalStyleHiddenAntdSomeComponent = createGlobalStyle<{}>`
  div.ant-drawer {
    display: none;
  }

  div.ant-modal-root {
    display: none;
  }
`

export const Layout = () => {
  const location = useLocation()
  const isDesktop = useIsDesktop()

  if (location.pathname === '/') {
    return <Navigate replace to={'/registrant-list'} />
  }

  return (
    <>
      <AntdLayout className={clsx(!isDesktop && 'hidden')}>
        <Nav />

        <Main />
      </AntdLayout>

      {!isDesktop && (
        <>
          <GlobalStyleHiddenAntdSomeComponent />
          <div className="flex h-screen items-center justify-center text-center text-xl">
            Please use a device with a width greater than 1280px to access.
          </div>
        </>
      )}
    </>
  )
}
