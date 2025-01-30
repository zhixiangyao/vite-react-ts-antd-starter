import { Button, Space } from 'antd'
import React, { memo } from 'react'

interface Props {
  handleAdd: () => void
}

export const RegistrantListPageHeader = memo<Props>(({ handleAdd }) => {
  return (
    <Space className="mb-5 w-full justify-between">
      <Space>&nbsp;</Space>

      <Button type="primary" className="mb-5 self-end" onClick={handleAdd}>
        添加
      </Button>
    </Space>
  )
})
RegistrantListPageHeader.displayName = 'RegistrantListPageHeader'
