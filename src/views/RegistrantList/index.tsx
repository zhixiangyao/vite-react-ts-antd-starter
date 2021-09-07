import React, { useState } from 'react'
import { Button, Table, Space } from 'antd'
import { Popconfirm, message } from 'antd'
import moment from 'moment'

import { addRegistrant } from '/@/store/registrantReducer'
import { useAppDispatch, useAppSelector } from '/@/hooks'
import { deleteRegistrant } from '/@/store/registrantReducer'
import RegistrantForm from './components/RegistrantForm'

import type { Data } from '/@/store/registrantReducer'

function RegistrantList() {
  const reduxregistrantList = useAppSelector((state) => state.registrantReducer.registrantList)
  const dispatch = useAppDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<'add' | 'look' | 'edit'>('add')

  const showModalAdd = () => {
    setIsModalVisible(true)
    setState('add')
  }

  const showModalLook = (index: number) => {
    console.log(index)
    setIsModalVisible(true)
    setState('look')
  }

  const showModalEdit = (index: number) => {
    console.log(index)
    setIsModalVisible(true)
    setState('edit')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = (values: Data) => {
    const form = values
    form.graduationDate = moment(form.graduationDate).format('L')
    form.registrationTime = moment(form.registrationTime).format('L')
    form.birthDate = moment(form.birthDate).format('L')
    dispatch(addRegistrant(form))
    handleCancel()
  }

  const handleRender = (text: unknown, record: Data, index: number) => (
    <Space size="middle">
      <a className="text-green-600 cursor-pointer" onClick={() => showModalLook(index)}>
        查看
      </a>
      <a className="text-green-600 cursor-pointer" onClick={() => showModalEdit(index)}>
        编辑
      </a>
      <Popconfirm
        title={`确定删除${record.name}的记录吗?`}
        onConfirm={() => {
          dispatch(deleteRegistrant(index))
          message.success('Click on Yes')
        }}
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

  return (
    <>
      <Button type="primary" className="mb-3" onClick={() => showModalAdd()}>
        添加
      </Button>

      <Table rowKey="id" className="w-full" columns={columns} dataSource={reduxregistrantList} />

      <RegistrantForm
        visible={isModalVisible}
        state={state}
        handleCancel={() => handleCancel()}
        handleFinish={(values) => onFinish(values)}
      />
    </>
  )
}

export default RegistrantList
