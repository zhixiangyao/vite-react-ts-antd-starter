import React from 'react'
import { Row, Col, Form, Input } from 'antd'

const RemarksInfoView: React.FC<{ disabled: boolean }> = ({ disabled }) => (
  <fieldset>
    <legend>其它</legend>

    <Row gutter={24}>
      <Col span={8} sm={10}>
        <Form.Item name="remarks" label="备注">
          <Input disabled={disabled} />
        </Form.Item>
      </Col>
    </Row>
  </fieldset>
)

export default RemarksInfoView
