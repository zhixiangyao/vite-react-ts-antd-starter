import React from 'react'
import { Form, Input, Row, Col } from 'antd'

const BankInfoView: React.FC<{ disabled: boolean }> = ({ disabled }) => (
  <fieldset>
    <legend>银行信息</legend>

    <Row gutter={24}>
      <Col span={8} sm={10}>
        <Form.Item name="providentFundAccount" label="公积金账号">
          <Input disabled={disabled} />
        </Form.Item>

        <Form.Item name="cardNo" label="银行卡号">
          <Input disabled={disabled} />
        </Form.Item>
      </Col>
    </Row>
  </fieldset>
)

export default BankInfoView
