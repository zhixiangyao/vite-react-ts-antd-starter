import React, { useMemo, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

import { firstCharacterUpperCase } from '/@/utils'

type Props = {
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
      className={clsx(
        'flex text-black items-center justify-start flex-col overflow-auto pr-5',
        className,
      )}
    >
      <div className="w-full h-[50px] p-20px text-20px font-700 flex items-center">{title}</div>

      {children}
    </main>
  )
}

export default Main
