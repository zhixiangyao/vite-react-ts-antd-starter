import React, { useState } from 'react'
import { Button, message } from 'antd'
import moment from 'moment'

import { useAppDispatch, useAppSelector } from '/@/hooks'
import { addRegistrant, editRegistrant } from '/@/store/reducer/registrantReducer'
import { deleteRegistrant } from '/@/store/reducer/registrantReducer'
import type { Data } from '/@/store/reducer/registrantReducer'

import RegistrantForm from './components/RegistrantForm'
import RegistranTableList from './components/RegistranTableList'
import { State } from './type'

function formatMoment(time: moment.MomentInput, type = 'L') {
  return moment(time).format(type)
}

const RegistrantList: React.FC = () => {
  const dispatch = useAppDispatch()
  const reduxRegistrantList = useAppSelector((state) => state.registrantReducer.registrantList)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<State>(State.ADD)
  const [fields, setFields] = useState<Data>({})
  const [index, setIndex] = useState<number>(0)

  const handleAdd = () => {
    setIsModalVisible(true)
    setState(State.ADD)
  }

  const handleTableLook = (index: number) => {
    setIsModalVisible(true)
    setState(State.LOOK)
    setFields(reduxRegistrantList[index])
  }

  const handleTableEdit = (index: number) => {
    setIsModalVisible(true)
    setState(State.EDIT)
    setIndex(index)
    setFields(reduxRegistrantList[index])
  }

  const handleTableDelete = (index: number) => {
    dispatch(deleteRegistrant(index))
    message.success('Click on Yes')
  }

  const hideFormView = () => {
    setIsModalVisible(false)
    setFields({})
  }

  const handleFormAdd = (values: Data) => {
    const form = {
      ...values,
      graduationDate: formatMoment(values.graduationDate),
      registrationTime: formatMoment(values.registrationTime),
      birthDate: formatMoment(values.birthDate),
    }

    dispatch(addRegistrant(form))
    hideFormView()
  }

  const handleFormEdit = (values: Data) => {
    const form = {
      ...values,
      graduationDate: formatMoment(values.graduationDate),
      registrationTime: formatMoment(values.registrationTime),
      birthDate: formatMoment(values.birthDate),
    }

    dispatch(editRegistrant({ index, value: form }))
    hideFormView()
  }

  return (
    <>
      <Button type="primary" className="mb-3 self-end" onClick={handleAdd}>
        添加
      </Button>

      <RegistranTableList
        list={reduxRegistrantList}
        handleLook={handleTableLook}
        handleEdit={handleTableEdit}
        handleDelete={handleTableDelete}
      />

      <RegistrantForm
        visible={isModalVisible}
        fields={fields}
        state={state}
        handleFormCancel={hideFormView}
        handleFormAdd={handleFormAdd}
        handleFormEdit={handleFormEdit}
      />
    </>
  )
}

export default RegistrantList
