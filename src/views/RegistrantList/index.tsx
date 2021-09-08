import React, { useState } from 'react'
import { Button, Table, Space } from 'antd'
import { Popconfirm, message } from 'antd'
import moment from 'moment'

import { addRegistrant, editRegistrant } from '/@/store/reducer/registrantReducer'
import { useAppDispatch, useAppSelector } from '/@/hooks'
import { deleteRegistrant } from '/@/store/reducer/registrantReducer'
import RegistrantForm from './components/RegistrantForm'

import type { Data } from '/@/store/reducer/registrantReducer'

function RegistrantList() {
  const dispatch = useAppDispatch()
  const reduxregistrantList = useAppSelector((state) => state.registrantReducer.registrantList)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<'add' | 'look' | 'edit'>('add')
  const [fields, setFields] = useState<Data>({})
  const [index, setIndex] = useState<number>(0)

  const hideModalForm = (): void => {
    setIsModalVisible(false)
    setFields({})
  }

  const showModalFormAdd = (): void => {
    setIsModalVisible(true)
    setState('add')
  }

  const showModalFormLook = (index: number): void => {
    console.log(index)
    setIsModalVisible(true)
    setState('look')
    setFields(reduxregistrantList[index])
  }

  const showModalFormEdit = (index: number): void => {
    console.log(index)
    setIsModalVisible(true)
    setState('edit')
    setFields(reduxregistrantList[index])
  }

  const onFinishAdd = (values: Data): void => {
    const form = values
    form.graduationDate = moment(form.graduationDate).format('L')
    form.registrationTime = moment(form.registrationTime).format('L')
    form.birthDate = moment(form.birthDate).format('L')

    dispatch(addRegistrant(form))
    hideModalForm()
  }

  const onFinishEdit = (values: Data): void => {
    const form = values
    form.graduationDate = moment(form.graduationDate).format('L')
    form.registrationTime = moment(form.registrationTime).format('L')
    form.birthDate = moment(form.birthDate).format('L')

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
      <Button type="primary" className="mb-3" onClick={() => showModalFormAdd()}>
        添加
      </Button>

      <Table
        rowKey="id"
        className="w-full"
        columns={columns}
        dataSource={reduxregistrantList}
        bordered
      />

      <RegistrantForm
        fields={fields}
        visible={isModalVisible}
        state={state}
        handleCancel={() => hideModalForm()}
        handleFinishAdd={(values) => onFinishAdd(values)}
        handleFinishEdit={(values) => onFinishEdit(values)}
      />
    </>
  )
}

export default RegistrantList
