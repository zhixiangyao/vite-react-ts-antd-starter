import React, { useEffect, useState } from 'react'
import { Form, Input, Radio, Select, DatePicker } from 'antd'
import { Modal, Button } from 'antd'
import { Row, Col } from 'antd'

import Line from '/@/components/Line'
import UploadAvatar from '/@/components/UploadAvatar'

interface Props {
  visible: boolean
  handleCancel: () => void
  state: 'add' | 'look' | 'edit'
}

const RegistrantForm: React.FC<Props> = ({ visible, handleCancel, state }) => {
  const addLookEdit = {
    add: '添加',
    look: '查看',
    edit: '编辑',
  }

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    state === 'look' ? setDisabled(true) : setDisabled(false)
  }, [state])

  const onFinish = (values: any) => {
    console.log('Success:', values)
    handleCancel()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Modal
        title={`${addLookEdit[state]}: 员工入职登记表`}
        width="100%"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: 'small' }}
          size="small"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="编号">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="填表时间">
                <DatePicker disabled={disabled} />
              </Form.Item>

              <Form.Item label="姓名">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="出生年月">
                <DatePicker picker="month" disabled={disabled} />
              </Form.Item>

              <Form.Item label="性别">
                <Radio.Group disabled={disabled}>
                  <Radio value={0}>男</Radio>
                  <Radio value={1}>女</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="婚姻">
                <Select disabled={disabled}>
                  <Select.Option value={0}>未婚未孕</Select.Option>
                  <Select.Option value={1}>已婚未孕</Select.Option>
                  <Select.Option value={2}>已婚已孕</Select.Option>
                  <Select.Option value={3}>未婚已孕</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="户籍">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="户口性质">
                <Select disabled={disabled}>
                  <Select.Option value={0}>城镇</Select.Option>
                  <Select.Option value={1}>农村</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="民族">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="党/团">
                <Select disabled={disabled}>
                  <Select.Option value={0}>党员</Select.Option>
                  <Select.Option value={1}>团员</Select.Option>
                  <Select.Option value={2}>群众</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <UploadAvatar disabled={disabled} />
            </Col>
          </Row>

          <Line />

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="最高学历">
                <Select disabled={disabled}>
                  <Select.Option value={0}>本科</Select.Option>
                  <Select.Option value={1}>大专</Select.Option>
                  <Select.Option value={2}>职高/普高</Select.Option>
                  <Select.Option value={3}>初中</Select.Option>
                  <Select.Option value={4}>小学</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="毕业院校">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="毕业专业">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="毕业时间">
                <DatePicker picker="month" disabled={disabled} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="岗/职位">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="身份证号">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="户口所在地址">
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item label="常住址">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>

          <Line />

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="微信号">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="QQ号">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="手机号">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="E-mail">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="紧急联系人">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="关系">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="联系电话">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>

          <Line />

          <Line />

          <Form.Item label="公积金账号">
            <Input disabled={disabled} />
          </Form.Item>

          <Form.Item label="银行卡号(兴业银行)">
            <Input disabled={disabled} />
          </Form.Item>

          <Line />

          <Form.Item label="备注">
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
