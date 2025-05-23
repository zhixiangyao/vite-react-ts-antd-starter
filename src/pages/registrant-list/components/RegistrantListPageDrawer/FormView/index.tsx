import type { Data } from '/@/store/Reducer/registrantReducer'
import type { Props } from '../type'
import { Form } from 'antd'
import dayjs from 'dayjs'
import React, { memo, useEffect } from 'react'
import { ADD_LOOK_EDIT } from '../../../type'
import { timeKeys } from '../data'
import { BasicInfoView } from './components/BasicInfoView'
import { SubmitView } from './components/SubmitView'

type FormViewProps = Pick<Props, 'state' | 'handleFormEdit' | 'handleFormAdd' | 'fields'>

export const FormView = memo<FormViewProps>((props) => {
  const { state, fields, handleFormAdd, handleFormEdit } = props
  const [form] = Form.useForm()
  const disabled = state === ADD_LOOK_EDIT.LOOK

  // React Hook useEffect has a missing dependency: 'form'.
  // Either include it or remove the dependency array.
  useEffect(() => {
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
      <BasicInfoView disabled={disabled} />

      <SubmitView state={state} disabled={disabled} />
    </Form>
  )
})
FormView.displayName = 'FormView'
