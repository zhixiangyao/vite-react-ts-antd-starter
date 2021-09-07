import React, { useEffect } from 'react'
import { Button, Table, Space } from 'antd'
import { Popconfirm, message } from 'antd'

import { useAppDispatch, useAppSelector } from '/@/hooks'
import { addRegistrant, deleteRegistrant } from '/@/store/registrantReducer'

import type { Data } from '/@/store/registrantReducer'

function RegistrantList() {
  const reduxregistrantList = useAppSelector((state) => state.registrantReducer.registrantList)
  const dispatch = useAppDispatch()

  useEffect(() => console.log('componentDidMount!'), [])

  useEffect(() => console.log('componentDidMount-and-componentDidUpdate!'))

  useEffect(() => {
    console.log('componentDidMount~')

    return () => console.log('componentWillUnmount~')
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '填表时间',
      dataIndex: 'registrationTime',
      key: 'registrationTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: unknown, record: Data, index: number) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a className="text-green-600 cursor-pointer">查看</a>
          <a className="text-green-600 cursor-pointer">编辑</a>
          <Popconfirm
            title={`确定删除${record.name}的记录吗?`}
            onConfirm={() => {
              dispatch(deleteRegistrant(index))
              message.success('Click on Yes')
            }}
            okText="Yes"
            cancelText="No"
          >
            <a className="text-red-600 cursor-pointer">删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Button type="primary" className="mt-3" onClick={() => dispatch(addRegistrant())}>
        Add
      </Button>

      <Table className="w-full p-4" columns={columns} dataSource={reduxregistrantList} />
    </>
  )
}

export default RegistrantList
