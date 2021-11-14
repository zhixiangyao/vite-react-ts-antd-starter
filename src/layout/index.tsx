import React from 'react'
import { Outlet } from 'react-router-dom'

import Main from '/@/layout/components/Main'
import Side from '/@/layout/components/Side'

const Default = () => {
  return (
    <>
      <Side style={{ width: 256 }} />

      <Main style={{ width: `calc(100vw - ${256}px)` }} className="inline">
        <Outlet />
      </Main>
    </>
  )
}

export default Default
