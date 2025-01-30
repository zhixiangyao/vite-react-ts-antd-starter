import { Watermark, type WatermarkProps } from 'antd'
import React, { memo } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

const watermarkConfig: WatermarkProps = {
  content: 'vite-react-ts-antd-starter',
  gap: [150, 150],
}

interface Props {}

export const Main = memo<Props>(() => {
  const navigation = useNavigation()

  return (
    <Watermark
      className="h-[calc(100vh_-_50px)] w-full overflow-y-auto overflow-x-hidden px-3 pt-2"
      content={watermarkConfig.content}
      gap={watermarkConfig.gap}
    >
      {navigation.state === 'loading' && 'loading...'}

      <Outlet />
    </Watermark>
  )
})
Main.displayName = 'Main'
