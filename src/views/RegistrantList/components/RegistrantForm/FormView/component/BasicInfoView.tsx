import React from 'react'
import { Form, Input, Radio, Select, DatePicker } from 'antd'
import { Row, Col } from 'antd'

import UploadAvatar from './UploadAvatar'
import { maritalStatusList, politicalIdentityList } from '../../data'

const BasicInfoView: React.FC<{ disabled: boolean }> = ({ disabled }) => (
  <fieldset>
    <legend>基础信息</legend>

    <Row gutter={24}>
      <Col span={8} sm={10}>
        <Form.Item name="id" rules={[{ required: true, message: '请输入你的编号!' }]} label="编号">
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

        <Form.Item name="sex" rules={[{ required: true, message: '请选择你的性别!' }]} label="性别">
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
            {maritalStatusList.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="censusRegister"
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
            {politicalIdentityList.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>

      <Col span={8} sm={4}>
        <UploadAvatar disabled={true} />
      </Col>
    </Row>
  </fieldset>
)

export default BasicInfoView
