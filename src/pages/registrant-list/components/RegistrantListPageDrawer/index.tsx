import type { Props } from './type'
import type { Data } from '~/store/Reducer/registrantReducer'
import { Button, Drawer, Form } from 'antd'
import dayjs from 'dayjs'
import React, { memo } from 'react'

import { EnumAddLookEdit } from '../../type'
import { BasicInfoView } from './components/BasicInfoView'

const AddLookEdit = ['添加', '查看', '编辑']
const TimeKeys = ['graduationDate', 'registrationTime', 'birthDate']

export const RegistrantListPageDrawer = memo<Props>((props) => {
  const { visible, handleFormCancel } = props
  const { state, fields, handleFormAdd, handleFormEdit } = props
  const [form] = Form.useForm()

  const handleFinish = (values: Data) => {
    state === EnumAddLookEdit.ADD ? handleFormAdd(values) : handleFormEdit(values)
  }

  const handleAfterOpenChange = (open: boolean) => {
    if (!open)
      return

    switch (state) {
      case EnumAddLookEdit.ADD: {
        form.resetFields()
        break
      }
      case EnumAddLookEdit.LOOK:
      case EnumAddLookEdit.EDIT: {
        for (const [key, value] of Object.entries(fields)) {
          form.setFieldsValue({ [key]: TimeKeys.includes(key) ? dayjs(value as string) : value })
        }
      }
    }
  }

  return (
    <Drawer
      width="1180px"
      title={`${AddLookEdit[state]}: 员工入职登记表`}
      placement="right"
      onClose={handleFormCancel}
      open={visible}
      footer={(
        state !== EnumAddLookEdit.LOOK && (
          <Button type="primary" onClick={() => form.submit()}>
            确定
          </Button>
        )
      )}
      afterOpenChange={handleAfterOpenChange}
    >
      <Form
        layout="horizontal"
        size="small"
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ size: 'small' }}
        onFinish={handleFinish}
      >
        <BasicInfoView disabled={state === EnumAddLookEdit.LOOK} />
      </Form>
    </Drawer>
  )
})
RegistrantListPageDrawer.displayName = 'RegistrantListPageDrawer'
