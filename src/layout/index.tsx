import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Main from '/@/layout/components/Main'
import Side from '/@/layout/components/Side'

const Default: React.FC = () => {
  const [width] = useState(256)
  const [collapsed] = useState(false)

  return (
    <>
      <Side style={{ width }} collapsed={collapsed} />

      <Main style={{ width: `calc(100vw - ${width}px)` }} className="inline">
        <Outlet />
      </Main>
    </>
  )
}

export default Default
