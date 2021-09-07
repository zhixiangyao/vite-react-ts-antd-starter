import React, { useState } from 'react'
import { Button, Table, Space } from 'antd'
import { Popconfirm, message } from 'antd'
import moment from 'moment'

import {
  addRegistrant,
  addRegistrantField,
  editRegistrant,
  editRegistrantField,
} from '/@/store/registrantReducer'
import { useAppDispatch, useAppSelector } from '/@/hooks'
import { deleteRegistrant } from '/@/store/registrantReducer'
import RegistrantForm from './components/RegistrantForm'

import type { FieldData } from '/@/store/registrantReducer'
import type { Data } from '/@/store/registrantReducer'

function RegistrantList() {
  const reduxregistrantList = useAppSelector((state) => state.registrantReducer.registrantList)
  const registrantFieldList = useAppSelector((state) => state.registrantReducer.registrantFieldList)
  const dispatch = useAppDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<'add' | 'look' | 'edit'>('add')
  const [fields, setFields] = useState<FieldData[]>([])
  const [index, setIndex] = useState<number>(0)

  const hideModalForm = () => {
    setIsModalVisible(false)
    setFields([])
  }

  const showModalFormAdd = () => {
    setIsModalVisible(true)
    setState('add')
  }

  const showModalFormLook = (index: number) => {
    console.log(index)
    setIsModalVisible(true)
    setState('look')
    setFields(registrantFieldList[index])
  }

  const showModalFormEdit = (index: number) => {
    console.log(index)
    setIsModalVisible(true)
    setState('edit')
    setFields(registrantFieldList[index])
  }

  const onFinishAdd = (values: Data) => {
    const form = values
    form.graduationDate = moment(form.graduationDate).format('L')
    form.registrationTime = moment(form.registrationTime).format('L')
    form.birthDate = moment(form.birthDate).format('L')

    dispatch(addRegistrant(form))
    dispatch(addRegistrantField(fields))
    hideModalForm()
  }

  const onFinishEdit = (values: Data) => {
    const form = values
    form.graduationDate = moment(form.graduationDate).format('L')
    form.registrationTime = moment(form.registrationTime).format('L')
    form.birthDate = moment(form.birthDate).format('L')

    dispatch(editRegistrant({ index, value: form }))
    dispatch(editRegistrantField({ index, value: fields }))
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

      <Table rowKey="id" className="w-full" columns={columns} dataSource={reduxregistrantList} />

      <RegistrantForm
        fields={fields}
        visible={isModalVisible}
        state={state}
        handleCancel={() => hideModalForm()}
        handleFinishAdd={(values) => onFinishAdd(values)}
        handleFinishEdit={(values) => onFinishEdit(values)}
        handleonFields={(values) => setFields(values)}
      />
    </>
  )
}

export default RegistrantList
