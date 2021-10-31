import React from 'react'
import { Form, Input, Row, Col } from 'antd'

const ContactDetailsInfoView: React.FC<{ disabled: boolean }> = ({ disabled }) => (
  <fieldset>
    <legend>联系方式</legend>

    <Row gutter={24}>
      <Col span={8} sm={10}>
        <Form.Item name="WeChatID" label="微信号">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item name="email" label="E-mail">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item name="emergencyContact" label="紧急联系人">
          <Input disabled={disabled} />
        </Form.Item>
      </Col>

      <Col span={8} sm={10}>
        <Form.Item name="qqID" label="QQ号">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item name="emergencyContactRelationship" label="关系">
          <Input disabled={disabled} />
        </Form.Item>
      </Col>

      <Col span={8} sm={10}>
        <Form.Item name="phone" label="手机号">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item name="emergencyContactPhone" label="联系电话">
          <Input disabled={disabled} />
        </Form.Item>
      </Col>
    </Row>
  </fieldset>
)

export default ContactDetailsInfoView
