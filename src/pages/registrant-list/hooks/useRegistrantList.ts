import type { Data } from '/@/store/Reducer/registrantReducer'
import { message } from 'antd'

import { useCallback, useState } from 'react'
import { EnumAddLookEdit } from '../type'
import { useAppDispatch, useAppSelector } from '/@/store'
import { addRegistrant, deleteRegistrant, editRegistrant } from '/@/store/Reducer/registrantReducer'
import { formatTime } from '/@/utils/time'

function useRegistrantList() {
  const dispatch = useAppDispatch()
  const list = useAppSelector(state => state.registrantReducer.list)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState<EnumAddLookEdit>(EnumAddLookEdit.ADD)
  const [fields, setFields] = useState<Data>({})
  const [index, setIndex] = useState<number>(0)

  const handleAdd = useCallback(() => {
    setIsModalVisible(true)
    setState(EnumAddLookEdit.ADD)
  }, [])

  const handleTableLook = useCallback(
    (index: number) => {
      setIsModalVisible(true)
      setState(EnumAddLookEdit.LOOK)
      setFields(list[index])
    },
    [list],
  )

  const handleTableEdit = useCallback(
    (index: number) => {
      setIsModalVisible(true)
      setState(EnumAddLookEdit.EDIT)
      setIndex(index)
      setFields(list[index])
    },
    [list],
  )

  const handleTableDelete = useCallback(
    (index: number) => {
      dispatch(deleteRegistrant(index))
      message.success('Click on Yes')
    },
    [dispatch],
  )

  const handleFormCancel = useCallback(() => {
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
      handleFormCancel()
    },
    [dispatch, handleFormCancel],
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
      handleFormCancel()
    },
    [dispatch, handleFormCancel, index],
  )

  return {
    isModalVisible,
    fields,
    state,
    list,

    handleAdd,
    handleTableLook,
    handleTableEdit,
    handleTableDelete,
    handleFormCancel,
    handleFormAdd,
    handleFormEdit,
  }
}

export { useRegistrantList }
