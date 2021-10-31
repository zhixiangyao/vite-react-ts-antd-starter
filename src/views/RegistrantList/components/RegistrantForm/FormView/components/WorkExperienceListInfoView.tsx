import React from 'react'
import { Form, Input, Space, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const WorkExperienceListInfoView: React.FC<{ disabled: boolean }> = ({ disabled }) => (
  <fieldset>
    <legend>工作经历</legend>

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
  </fieldset>
)

export default WorkExperienceListInfoView
