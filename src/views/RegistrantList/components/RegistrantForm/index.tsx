import React, { useEffect, useState } from 'react'
import { Form, Input, Radio, Select, DatePicker, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Modal, Button, Row, Col } from 'antd'
import moment from 'moment'

import Line from '/@/components/Line'
import UploadAvatar from '/@/components/UploadAvatar'
import {
  addLookEdit,
  maritalStatusList,
  politicalIdentityList,
  highestEducationList,
  timeKeys,
} from './data'

import type { Data } from '/@/store/reducer/registrantReducer'
import type { Props } from './type'

const RegistrantForm: React.FC<Props> = (props) => {
  const { visible, state, fields, handleCancel, handleFinishAdd, handleFinishEdit } = props
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    state === 'look' ? setDisabled(true) : setDisabled(false)
    state === 'add' && form.resetFields()
  }, [state])

  useEffect(() => {
    for (const [key, value] of Object.entries(fields)) {
      form.setFieldsValue({ [key]: timeKeys.includes(key) ? moment(value) : value })
    }
  })

  const onFinish = (values: Data) => {
    state === 'add' ? handleFinishAdd(values) : handleFinishEdit(values)
  }

  const workList = (
    <Form.List name="workList">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }) => (
            <Space size={100} key={key} style={{ marginBottom: 8 }} align="baseline">
              <Form.Item
                {...restField}
                name={[name, 'date']}
                fieldKey={[fieldKey, 'date']}
                rules={[{ required: true, message: '请输入起止日期' }]}
              >
                <Input disabled={disabled} placeholder="起止日期" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, 'name']}
                fieldKey={[fieldKey, 'name']}
                rules={[{ required: true, message: '请输入工作单位' }]}
              >
                <Input disabled={disabled} placeholder="工作单位" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, 'rule']}
                fieldKey={[fieldKey, 'rule']}
                rules={[{ required: true, message: '请输入工作职位' }]}
              >
                <Input disabled={disabled} placeholder="工作职位" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, 'info']}
                fieldKey={[fieldKey, 'info']}
                rules={[{ required: true, message: '请输入离职原因' }]}
              >
                <Input disabled={disabled} placeholder="离职原因" />
              </Form.Item>

              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}

          <Form.Item>
            <Button
              disabled={disabled}
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              新增工作经历
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )

  return (
    <Modal
      width="100%"
      visible={visible}
      footer={null}
      title={`${addLookEdit[state]}: 员工入职登记表`}
      style={{ top: 10 }}
      onCancel={handleCancel}
      destroyOnClose={false}
      getContainer={false}
      forceRender
    >
      <Form
        layout="horizontal"
        size="small"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ size: 'small' }}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={8} sm={10}>
            <Form.Item
              name="id"
              rules={[{ required: true, message: '请输入你的编号!' }]}
              label="编号"
            >
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item
              name="registrationTime"
              rules={[{ required: true, message: '请选择你的填表时间!' }]}
              label="填表时间"
            >
              <DatePicker disabled={disabled} />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[{ required: true, message: '请输入你的姓名!' }]}
              label="姓名"
            >
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item
              name="birthDate"
              rules={[{ required: true, message: '请选择你的出生年月!' }]}
              label="出生年月"
            >
              <DatePicker picker="month" disabled={disabled} />
            </Form.Item>

            <Form.Item
              name="sex"
              rules={[{ required: true, message: '请选择你的性别!' }]}
              label="性别"
            >
              <Radio.Group disabled={disabled}>
                <Radio value={0}>男</Radio>
                <Radio value={1}>女</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={8} sm={10}>
            <Form.Item
              name="maritalStatus"
              rules={[{ required: true, message: '请选择你的婚姻!' }]}
              label="婚姻"
            >
              <Select disabled={disabled}>
                {maritalStatusList.map(({ lable, value }) => (
                  <Select.Option key={value} value={value}>
                    {lable}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="censusEegister"
              rules={[{ required: true, message: '请输入你的户籍!' }]}
              label="户籍"
            >
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item
              name="category"
              rules={[{ required: true, message: '请选择你的户口性质!' }]}
              label="户口性质"
            >
              <Select disabled={disabled}>
                <Select.Option value={0}>城镇</Select.Option>
                <Select.Option value={1}>农村</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="nation"
              rules={[{ required: true, message: '请输入你的民族!' }]}
              label="民族"
            >
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item
              name="politicalIdentity"
              rules={[{ required: true, message: '请选择你的党/团!' }]}
              label="党/团"
            >
              <Select disabled={disabled}>
                {politicalIdentityList.map(({ lable, value }) => (
                  <Select.Option key={value} value={value}>
                    {lable}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8} sm={4}>
            <UploadAvatar disabled={disabled} />
          </Col>
        </Row>

        <Line />

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="highestEducation" label="最高学历">
              <Select disabled={disabled}>
                {highestEducationList.map(({ lable, value }) => (
                  <Select.Option key={value} value={value}>
                    {lable}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="graduationSchool" label="毕业院校">
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item name="major" label="毕业专业">
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item name="graduationDate" label="毕业时间">
              <DatePicker picker="month" disabled={disabled} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="position" label="岗/职位">
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item name="idCard" label="身份证号">
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item name="accountAddress" label="户口所在地址">
              <Input disabled={disabled} />
            </Form.Item>

            <Form.Item name="oftenAddress" label="常住址">
              <Input disabled={disabled} />
            </Form.Item>
          </Col>
        </Row>

        <Line />

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="wechatID" label="微信号">
              <Input disabled={disabled} />
            </Form.Item>
            <Form.Item name="email" label="E-mail">
              <Input disabled={disabled} />
            </Form.Item>
            <Form.Item name="emergencyContact" label="紧急联系人">
              <Input disabled={disabled} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="qqID" label="QQ号">
              <Input disabled={disabled} />
            </Form.Item>
            <Form.Item name="emergencyContactRelationship" label="关系">
              <Input disabled={disabled} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="phone" label="手机号">
              <Input disabled={disabled} />
            </Form.Item>
            <Form.Item name="emergencyContactPhone" label="联系电话">
              <Input disabled={disabled} />
            </Form.Item>
          </Col>
        </Row>

        <Line />

        {workList}

        <Line />

        <Form.Item name="providentFundAccount" label="公积金账号">
          <Input disabled={disabled} />
        </Form.Item>

        <Form.Item name="cardNo" label="银行卡号(兴业银行)">
          <Input disabled={disabled} />
        </Form.Item>

        <Line />

        <Form.Item name="remarks" label="备注">
          <Input disabled={disabled} />
        </Form.Item>

        {disabled === false && (
          <Form.Item wrapperCol={{ span: 24, offset: 12 }}>
            <Button type="primary" htmlType="submit">
              {addLookEdit[state]}
            </Button>
          </Form.Item>
        )}
      </Form>
    </Modal>
  )
}

export default RegistrantForm
