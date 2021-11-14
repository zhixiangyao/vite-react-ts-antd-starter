import React from 'react'
import { Table, Space } from 'antd'
import { Popconfirm } from 'antd'

import type { Data } from '/@/store/Reducer/registrantReducer'

interface Props {
  list: Data[]
  handleLook: (index: number) => void
  handleEdit: (index: number) => void
  handleDelete: (index: number) => void
}

const RegistrantTableList: React.FC<Props> = (props) => {
  const { list, handleLook, handleEdit, handleDelete } = props

  const handleRender = (text: unknown, record: Data, index: number) => (
    <Space size="middle">
      <a className="text-green-600 cursor-pointer" onClick={() => handleLook(index)}>
        查看
      </a>

      <a className="text-green-600 cursor-pointer" onClick={() => handleEdit(index)}>
        编辑
      </a>

      <Popconfirm
        title={`确定删除${record.name}的记录吗?`}
        onConfirm={() => handleDelete(index)}
        okText="是"
        cancelText="否"
      >
        <a className="text-red-600 cursor-pointer">删除</a>
      </Popconfirm>
    </Space>
  )

  const columns = [
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
}

export default RegistrantTableList
