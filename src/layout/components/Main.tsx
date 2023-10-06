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
        'flex flex-col items-center justify-start overflow-auto pr-5 text-black',
        className,
      )}
    >
      <div className="p-20px text-20px font-700 flex h-[50px] w-full items-center">{title}</div>

      {children}
    </main>
  )
}

export default Main
