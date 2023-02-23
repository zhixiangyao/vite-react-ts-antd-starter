import React, { useMemo, type ReactNode } from 'react'
import { PageHeader } from '@ant-design/pro-layout'

import { useLocation } from 'react-router-dom'
import { firstCharacterUpperCase } from '/@/utils'

interface Props {
  style?: React.CSSProperties | undefined
  className?: string
  children?: ReactNode
}

const Main: React.FC<Props> = ({ children, style, className = '' }) => {
  const { pathname } = useLocation()

  const title = useMemo(() => {
    const list = pathname.split('/').pop()?.split('-')

    return list?.map(firstCharacterUpperCase).join(' ')
  }, [pathname])

  return (
    <main
      style={style}
      className={
        `flex text-black items-center justify-start flex-col pl-4 pb-4 pr-8 overflow-auto` +
        className
      }
    >
      <PageHeader className="w-full" title={title} />

      {children}
    </main>
  )
}

export default Main
