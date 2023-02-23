import React from 'react'
import { Modal } from 'antd'

import FormView from './FormView'
import { addLookEdit } from './data'

import type { Props } from './type'

const RegistrantForm: React.FC<Props> = (props) => {
  const { visible, handleFormCancel } = props
  const { state, fields, handleFormAdd, handleFormEdit } = props

  return (
    <Modal
      forceRender
      width="100%"
      open={visible}
      footer={null}
      title={`${addLookEdit[state]}: 员工入职登记表`}
      style={{ top: 10 }}
      onCancel={handleFormCancel}
      destroyOnClose={false}
    >
      <FormView {...{ state, handleFormAdd, handleFormEdit, fields }} />
    </Modal>
  )
}

export default RegistrantForm
