import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Form } from 'antd'
import dayjs from 'dayjs'

import type { Data } from '/@/store/Reducer/registrantReducer'

import { ADD_LOOK_EDIT } from '../../../type'
import { timeKeys } from '../data'
import type { Props } from '../type'

const SubmitView = lazy(() => import('./components/SubmitView'))
const BasicInfoView = lazy(() => import('./components/BasicInfoView'))

type FormViewProps = Pick<Props, 'state' | 'handleFormEdit' | 'handleFormAdd' | 'fields'>

const FormView: React.FC<FormViewProps> = (props) => {
  const { state, fields, handleFormAdd, handleFormEdit } = props
  const [form] = Form.useForm()

  const [disabled, setDisabled] = useState(false)

  // React Hook useEffect has a missing dependency: 'form'.
  // Either include it or remove the dependency array.
  useEffect(() => {
    setDisabled(state === ADD_LOOK_EDIT.LOOK)

    state === ADD_LOOK_EDIT.ADD && form.resetFields()
  }, [state, form])

  useEffect(() => {
    for (const [key, value] of Object.entries(fields)) {
      form.setFieldsValue({ [key]: timeKeys.includes(key) ? dayjs(value as string) : value })
    }
  })

  const onFinish = (values: Data) => {
    state === ADD_LOOK_EDIT.ADD ? handleFormAdd(values) : handleFormEdit(values)
  }

  return (
    <Form
      layout="horizontal"
      size="small"
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ size: 'small' }}
      onFinish={onFinish}
    >
      <Suspense fallback={<>loading...</>}>
        <BasicInfoView disabled={disabled} />

        <SubmitView state={state} disabled={disabled} />
      </Suspense>
    </Form>
  )
}

export default FormView
