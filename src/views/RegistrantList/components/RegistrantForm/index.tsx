import React, { useEffect, useState } from 'react'
import { Form, Input, Radio, Select, DatePicker } from 'antd'
import { Modal, Button } from 'antd'
import { Row, Col } from 'antd'

import Line from '/@/components/Line'
import UploadAvatar from '/@/components/UploadAvatar'

import type { Data } from '/@/store/registrantReducer'

interface Props {
  visible: boolean
  state: 'add' | 'look' | 'edit'
  handleCancel: () => void
  handleFinish: (values: Data) => void
}

const addLookEdit = {
  add: '添加',
  look: '查看',
  edit: '编辑',
}

const RegistrantForm: React.FC<Props> = ({ visible, state, handleCancel, handleFinish }) => {
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    state === 'look' ? setDisabled(true) : setDisabled(false)
  }, [state])

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Modal
        width="100%"
        visible={visible}
        footer={null}
        title={`${addLookEdit[state]}: 员工入职登记表`}
        style={{ top: 10 }}
        onCancel={handleCancel}
      >
        <Form
          layout="horizontal"
          size="small"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ size: 'small' }}
          onFinish={(values) => handleFinish(values)}
          onFinishFailed={(values) => onFinishFailed(values)}
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
                  <Select.Option value={0}>未婚未孕</Select.Option>
                  <Select.Option value={1}>已婚未孕</Select.Option>
                  <Select.Option value={2}>已婚已孕</Select.Option>
                  <Select.Option value={3}>未婚已孕</Select.Option>
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
                  <Select.Option value={0}>党员</Select.Option>
                  <Select.Option value={1}>团员</Select.Option>
                  <Select.Option value={2}>群众</Select.Option>
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
                  <Select.Option value={0}>本科</Select.Option>
                  <Select.Option value={1}>大专</Select.Option>
                  <Select.Option value={2}>职高/普高</Select.Option>
                  <Select.Option value={3}>初中</Select.Option>
                  <Select.Option value={4}>小学</Select.Option>
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
    </>
  )
}

export default RegistrantForm
