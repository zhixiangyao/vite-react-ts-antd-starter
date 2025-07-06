import type { TableProps } from 'antd'
import type { Data } from '~/store/Reducer/registrantReducer'
import { Popconfirm, Space, Table } from 'antd'
import React, { memo } from 'react'

interface Props {
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

  const columns: TableProps<Data>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 140,
      fixed: 'left',
      render: (id: string) => <div>{id}</div>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (name: string) => <div>{name}</div>,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      width: 80,
      render: (sex: number) => <div>{['男', '女'][sex]}</div>,
    },
    {
      title: '填表时间',
      dataIndex: 'registrationTime',
      key: 'registrationTime',
      width: 120,
      render: (registrationTime: string) => <div>{registrationTime}</div>,
    },
    {
      key: 'actions',
      title: '操作',
      width: 160,
      fixed: 'right',
      render: handleRender,
    },
  ]

  return (
    <Table
      rowKey="id"
      className="w-full"
      columns={columns}
      dataSource={list}
      bordered
      size="small"
      scroll={{ x: columns.reduce((acc, cur) => acc + (typeof cur.width === 'number' ? cur.width : 200), 0) }}
    />
  )
})
RegistrantListPageTable.displayName = 'RegistrantListPageTable'
