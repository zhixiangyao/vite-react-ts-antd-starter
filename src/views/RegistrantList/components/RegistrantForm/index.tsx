import React, { Suspense, lazy } from 'react'
import { Modal } from 'antd'

import { addLookEdit } from './data'

import type { Props } from './type'

const FormView = lazy(() => import('./FormView'))

const RegistrantForm: React.FC<Props> = (props) => {
  const { visible, handleFormCancel } = props
  const { state, fields, handleFormAdd, handleFormEdit } = props

  return (
    <Modal
      width="100%"
      open={visible}
      footer={null}
      title={`${addLookEdit[state]}: 员工入职登记表`}
      onCancel={handleFormCancel}
    >
      <Suspense fallback={<>loading...</>}>
        <FormView {...{ state, handleFormAdd, handleFormEdit, fields }} />
      </Suspense>
    </Modal>
  )
}

export default RegistrantForm
