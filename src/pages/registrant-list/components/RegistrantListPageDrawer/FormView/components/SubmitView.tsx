import React from 'react'
import { Form, Button } from 'antd'

import { addLookEdit } from '../../data'
import type { Props } from '../../type'

interface SubmitViewProps extends Pick<Props, 'state'> {
  disabled: boolean
}

export const SubmitView: React.FC<SubmitViewProps> = ({ disabled, state }) =>
  disabled === false ? (
    <Form.Item wrapperCol={{ span: 24, offset: 12 }}>
      <Button type="primary" size="large" htmlType="submit">
        {addLookEdit[state]}
      </Button>
    </Form.Item>
  ) : null
