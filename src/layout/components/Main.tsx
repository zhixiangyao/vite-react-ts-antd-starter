import React, { useMemo, type ReactNode } from 'react'

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
      className={`flex text-black items-center justify-start flex-col pl-4 pb-4 pr-8 overflow-auto ${
        className ?? ''
      }`}
    >
      <div className="w-full p-20px text-20px font-700">{title}</div>

      {children}
    </main>
  )
}

export default Main
