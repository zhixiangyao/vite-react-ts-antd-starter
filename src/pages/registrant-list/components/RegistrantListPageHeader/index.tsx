import { Button, Space } from 'antd'

interface Props {
  handleAdd: () => void
}

function RegistrantListPageHeader({ handleAdd }: Props) {
  return (
    <Space className="mb-5 w-full justify-between">
      <Space>&nbsp;</Space>

      <Button type="primary" className="self-end" onClick={handleAdd}>
        添加
      </Button>
    </Space>
  )
}

export { RegistrantListPageHeader }
