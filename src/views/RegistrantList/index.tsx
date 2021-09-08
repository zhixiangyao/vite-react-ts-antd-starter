import React, { useState } from 'react'
import { Button, Table, Space } from 'antd'
import { Popconfirm, message } from 'antd'
import moment from 'moment'

import { addRegistrant, editRegistrant } from '/@/store/reducer/registrantReducer'
import { deleteRegistrant } from '/@/store/reducer/registrantReducer'
import { useAppDispatch, useAppSelector } from '/@/hooks'
import RegistrantForm from './components/RegistrantForm'

import type { Data } from '/@/store/reducer/registrantReducer'

function RegistrantList() {
  const dispatch = useAppDispatch()
  const reduxRegistrantList = useAppSelector((state) => state.registrantReducer.registrantList)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<'add' | 'look' | 'edit'>('add')
  const [fields, setFields] = useState<Data>({})
  const [index, setIndex] = useState<number>(0)

  const hideModalForm = () => {
    setIsModalVisible(false)
    setFields({})
  }

  const showModalFormAdd = () => {
    setIsModalVisible(true)
    setState('add')
  }

  const showModalFormLook = (index: number) => {
    setIsModalVisible(true)
    setState('look')
    setFields(reduxRegistrantList[index])
  }

  const showModalFormEdit = (index: number) => {
    setIsModalVisible(true)
    setState('edit')
    setFields(reduxRegistrantList[index])
  }

  const onFinishAdd = (values: Data) => {
    const form = {
      ...values,
      graduationDate: moment(values.graduationDate).format('L'),
      registrationTime: moment(values.registrationTime).format('L'),
      birthDate: moment(values.birthDate).format('L'),
    }

    dispatch(addRegistrant(form))
    hideModalForm()
  }

  const onFinishEdit = (values: Data) => {
    const form = {
      ...values,
      graduationDate: moment(values.graduationDate).format('L'),
      registrationTime: moment(values.registrationTime).format('L'),
      birthDate: moment(values.birthDate).format('L'),
    }

    dispatch(editRegistrant({ index, value: form }))
    hideModalForm()
  }

  const handleRender = (text: unknown, record: Data, index: number) => (
    <Space size="middle">
      <a className="text-green-600 cursor-pointer" onClick={() => showModalFormLook(index)}>
        查看
      </a>

      <a
        className="text-green-600 cursor-pointer"
        onClick={() => {
          showModalFormEdit(index)
          setIndex(index)
        }}
      >
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
      <Button type="primary" className="mb-3" onClick={showModalFormAdd}>
        添加
      </Button>

      <Table
        rowKey="id"
        className="w-full"
        columns={columns}
        dataSource={reduxRegistrantList}
        bordered
      />

      <RegistrantForm
        fields={fields}
        visible={isModalVisible}
        state={state}
        handleCancel={hideModalForm}
        handleFinishAdd={onFinishAdd}
        handleFinishEdit={onFinishEdit}
      />
    </>
  )
}

export default RegistrantList
