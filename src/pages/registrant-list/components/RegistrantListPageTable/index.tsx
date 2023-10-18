import React, { memo } from 'react'
import { Table, Space } from 'antd'
import { Popconfirm } from 'antd'
import type { ColumnsType } from 'antd/es/table'

import type { Data } from '/@/store/Reducer/registrantReducer'

type Props = {
  list: Data[]
  handleLook: (index: number) => void
  handleEdit: (index: number) => void
  handleDelete: (index: number) => void
}

export const RegistrantListPageTable = memo<Props>((props) => {
  const { list, handleLook, handleEdit, handleDelete } = props

  const handleRender = (text: unknown, record: Data, index: number) => (
    <Space size="middle">
      <a className="cursor-pointer text-green-600" onClick={() => handleLook(index)}>
        查看
      </a>

      <a className="cursor-pointer text-green-600" onClick={() => handleEdit(index)}>
        编辑
      </a>

      <Popconfirm
        title={`确定删除${record.name}的记录吗?`}
        onConfirm={() => handleDelete(index)}
        okText="是"
        cancelText="否"
      >
        <a className="cursor-pointer text-red-600">删除</a>
      </Popconfirm>
    </Space>
  )

  const columns: ColumnsType<Data> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => <a>{id}</a>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => <a>{name}</a>,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      render: (sex: number) => <a>{['男', '女'][sex]}</a>,
    },
    {
      title: '填表时间',
      dataIndex: 'registrationTime',
      key: 'registrationTime',
    },
    {
      title: '操作',
      render: handleRender,
    },
  ]

  return <Table rowKey="id" className="w-full" columns={columns} dataSource={list} bordered />
})
RegistrantListPageTable.displayName = 'RegistrantListPageTable'
