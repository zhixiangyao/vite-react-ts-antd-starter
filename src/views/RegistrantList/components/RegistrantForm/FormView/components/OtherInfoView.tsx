import React from 'react'
import { Row, Col, Form, Input, Select, DatePicker } from 'antd'
import { highestEducationList } from '../../data'

const OtherInfoView: React.FC<{ disabled: boolean }> = ({ disabled }) => (
  <fieldset>
    <legend>其它信息</legend>

    <Row gutter={24}>
      <Col span={8} sm={10}>
        <Form.Item name="highestEducation" label="最高学历">
          <Select disabled={disabled}>
            {highestEducationList.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
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

      <Col span={8} sm={10}>
        <Form.Item name="position" label="岗/职位">
          <Input disabled={disabled} />
        </Form.Item>

        <Form.Item name="idCard" label="身份证号">
          <Input disabled={disabled} />
        </Form.Item>

        <Form.Item name="accountAddress" label="户口所在地">
          <Input disabled={disabled} />
        </Form.Item>

        <Form.Item name="oftenAddress" label="常住址">
          <Input disabled={disabled} />
        </Form.Item>
      </Col>
    </Row>
  </fieldset>
)

export default OtherInfoView
