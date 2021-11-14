import React from 'react'
import { PageHeader } from 'antd'
import { useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history'

interface Props {
  style?: React.CSSProperties | undefined
  className?: string
}

const Main: React.FC<Props> = ({ children, style, className = '' }) => {
  const history = createBrowserHistory()
  const { pathname } = useLocation()

  return (
    <main
      style={style}
      className={
        `flex text-black items-center justify-start flex-col pl-4 pb-4 pr-8 overflow-auto` +
        className
      }
    >
      <PageHeader
        className="w-full"
        onBack={() => history.back()}
        title="Title"
        subTitle={pathname}
      />
      {children}
    </main>
  )
}

export default Main
