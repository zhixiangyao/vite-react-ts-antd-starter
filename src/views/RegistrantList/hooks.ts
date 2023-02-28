import { useCallback, useState } from 'react'
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
  const registrantList = useAppSelector((state) => state.registrantReducer.registrantList)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<ADD_LOOK_EDIT>(ADD_LOOK_EDIT.ADD)
  const [fields, setFields] = useState<Data>({})
  const [index, setIndex] = useState<number>(0)

  const handleAdd = useCallback(() => {
    setIsModalVisible(true)
    setState(ADD_LOOK_EDIT.ADD)
  }, [])

  const handleTableLook = useCallback(
    (index: number) => {
      setIsModalVisible(true)
      setState(ADD_LOOK_EDIT.LOOK)
      setFields(registrantList[index])
    },
    [registrantList],
  )

  const handleTableEdit = useCallback(
    (index: number) => {
      setIsModalVisible(true)
      setState(ADD_LOOK_EDIT.EDIT)
      setIndex(index)
      setFields(registrantList[index])
    },
    [registrantList],
  )

  const handleTableDelete = useCallback(
    (index: number) => {
      dispatch(deleteRegistrant(index))
      message.success('Click on Yes')
    },
    [dispatch],
  )

  const hideFormView = useCallback(() => {
    setIsModalVisible(false)
    setFields({})
  }, [])

  const handleFormAdd = useCallback(
    (values: Data) => {
      const form = {
        ...values,
        graduationDate: formatTime(values.graduationDate),
        registrationTime: formatTime(values.registrationTime),
        birthDate: formatTime(values.birthDate),
      }

      dispatch(addRegistrant(form))
      hideFormView()
    },
    [dispatch, hideFormView],
  )

  const handleFormEdit = useCallback(
    (values: Data) => {
      const form = {
        ...values,
        graduationDate: formatTime(values.graduationDate),
        registrationTime: formatTime(values.registrationTime),
        birthDate: formatTime(values.birthDate),
      }

      dispatch(editRegistrant({ index, value: form }))
      hideFormView()
    },
    [dispatch, hideFormView, index],
  )

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
    registrantList,
  }
}

export { useMonster }
