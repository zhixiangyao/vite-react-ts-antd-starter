import { useState } from 'react'
import { message } from 'antd'
import dayjs from 'dayjs'

import { useAppDispatch, useAppSelector } from '/@/hooks'
import { addRegistrant, editRegistrant } from '/@/store/Reducer/registrantReducer'
import { deleteRegistrant } from '/@/store/Reducer/registrantReducer'
import { ADD_LOOK_EDIT } from './type'

import type { Data } from '/@/store/Reducer/registrantReducer'

const formatTime = (time: dayjs.ConfigType, type = 'L') => {
  return dayjs(time).format(type)
}

const useMonster = () => {
  const dispatch = useAppDispatch()
  const list = useAppSelector((state) => state.registrantReducer.registrantList)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<ADD_LOOK_EDIT>(ADD_LOOK_EDIT.ADD)
  const [fields, setFields] = useState<Data>({})
  const [index, setIndex] = useState<number>(0)

  const handleAdd = () => {
    setIsModalVisible(true)
    setState(ADD_LOOK_EDIT.ADD)
  }

  const handleTableLook = (index: number) => {
    setIsModalVisible(true)
    setState(ADD_LOOK_EDIT.LOOK)
    setFields(list[index])
  }

  const handleTableEdit = (index: number) => {
    setIsModalVisible(true)
    setState(ADD_LOOK_EDIT.EDIT)
    setIndex(index)
    setFields(list[index])
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
      graduationDate: formatTime(values.graduationDate),
      registrationTime: formatTime(values.registrationTime),
      birthDate: formatTime(values.birthDate),
    }

    dispatch(addRegistrant(form))
    hideFormView()
  }

  const handleFormEdit = (values: Data) => {
    const form = {
      ...values,
      graduationDate: formatTime(values.graduationDate),
      registrationTime: formatTime(values.registrationTime),
      birthDate: formatTime(values.birthDate),
    }

    dispatch(editRegistrant({ index, value: form }))
    hideFormView()
  }

  return {
    handleAdd,

    handleTableLook,
    handleTableEdit,
    handleTableDelete,

    hideFormView,
    handleFormAdd,
    handleFormEdit,

    isModalVisible,
    fields,
    state,
    list,
  }
}

export { useMonster }
