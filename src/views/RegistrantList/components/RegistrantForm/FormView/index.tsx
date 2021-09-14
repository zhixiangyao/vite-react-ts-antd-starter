import React, { useEffect, useState } from 'react'
import { Form } from 'antd'
import moment from 'moment'

import BasicInfoView from './component/BasicInfoView'
import OtherInfoView from './component/OtherInfoView'
import ContactDetailsInfoView from './component/ContactDetailsInfoView'
import BankInfoView from './component/BankInfoView'
import WorkExperienceListInfoView from './component/WorkExperienceListInfoView'
import RemarksInfoView from './component/RemarksInfoView'
import SubmitView from './component/SubmitView'
import { ADD_LOOK_EDIT } from '../../../type'
import { timeKeys } from '../data'

import type { Data } from '/@/store/reducer/registrantReducer'
import type { Props } from '../type'

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
      form.setFieldsValue({ [key]: timeKeys.includes(key) ? moment(value as string) : value })
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

      <OtherInfoView disabled={disabled} />

      <ContactDetailsInfoView disabled={disabled} />

      <BankInfoView disabled={disabled} />

      <WorkExperienceListInfoView disabled={disabled} />

      <RemarksInfoView disabled={disabled} />

      <SubmitView state={state} disabled={disabled} />
    </Form>
  )
}

export default FormView
