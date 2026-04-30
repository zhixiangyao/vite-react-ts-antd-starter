import { Skeleton } from 'antd'
import { isValidElement } from 'react'
import { PageHeader } from './PageHeader'

interface Props {
  title?: React.ReactNode
  children?: React.ReactNode
  header?: React.ReactElement
  headerLess?: boolean
  loading?: boolean
}

function Page(props: Props) {
  const { title, header, children, loading, headerLess } = props

  return (
    <>
      {headerLess ? null : isValidElement(header) ? header : <PageHeader title={loading ? 'Loading...' : title} />}

      <Skeleton active={loading} loading={loading}>
        {children}
      </Skeleton>
    </>
  )
}

export { Page }
