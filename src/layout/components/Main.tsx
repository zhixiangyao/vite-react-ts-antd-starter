import React, { memo, useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Layout } from 'antd'

import { stringCapitalization } from '/@/utils/string'

type Props = {}

export const Main = memo<Props>(() => {
  const { pathname } = useLocation()

  const title = useMemo(() => {
    const list = pathname.split('/').pop()?.split('-')

    return list?.map((str) => stringCapitalization(str)).join(' ')
  }, [pathname])

  return (
    <Layout.Content>
      <div className="font-700 flex h-[50px] w-full items-center px-7 text-[20px]">{title}</div>

      <div className="h-[calc(100vh_-_50px)] w-full overflow-y-auto overflow-x-hidden px-3">
        <Outlet />
      </div>
    </Layout.Content>
  )
})
Main.displayName = 'Main'
