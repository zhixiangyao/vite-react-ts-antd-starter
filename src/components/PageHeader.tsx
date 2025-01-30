import clsx from 'clsx'
import React, { memo } from 'react'

interface Props {
  className?: string
  style?: React.CSSProperties
  title?: React.ReactNode
}

const PageHeader = memo<Props>(({ className, style, title }) => {
  if (title === undefined)
    return null

  return (
    <div className={clsx(className, 'flex justify-between')} style={style}>
      <div className="my-1 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold leading-8 text-[rgba(0,0,0,0.88)]">
        {title}
      </div>
    </div>
  )
})
PageHeader.displayName = 'PageHeader'

export { PageHeader }
