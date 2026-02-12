import type { WatermarkProps } from 'antd'
import { Watermark } from 'antd'
import { Outlet, useNavigation } from 'react-router-dom'

const watermarkConfig: WatermarkProps = {
  content: 'vite-react-ts-antd-starter',
  gap: [150, 150],
}

function Main() {
  const navigation = useNavigation()

  return (
    <Watermark
      className="h-[calc(100vh-50px)] w-full overflow-y-auto overflow-x-hidden px-3 pt-2"
      content={watermarkConfig.content}
      gap={watermarkConfig.gap}
    >
      {navigation.state === 'loading' && 'loading...'}

      <Outlet />
    </Watermark>
  )
}

export { Main }
