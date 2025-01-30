import { Skeleton } from 'antd'
import React, { memo } from 'react'

import { PageHeader } from './PageHeader'

interface Props {
  title?: React.ReactNode
  children?: React.ReactNode
  header?: React.ReactElement
  headerLess?: boolean
  loading?: boolean
}

const Page = memo<Props>((props) => {
  const { title, header, children, loading, headerLess } = props

  return (
    <>
      {headerLess
        ? null
        : React.isValidElement(header)
          ? (
              header
            )
          : (
              <PageHeader title={loading ? 'Loading...' : title} />
            )}

      <Skeleton active={loading} loading={loading}>
        {children}
      </Skeleton>
    </>
  )
})
Page.displayName = 'Page'

export { Page }
