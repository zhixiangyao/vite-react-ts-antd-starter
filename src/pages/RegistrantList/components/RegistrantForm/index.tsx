import React, { Suspense, lazy } from 'react'
import { Drawer } from 'antd'

import { addLookEdit } from './data'
import type { Props } from './type'

const FormView = lazy(() => import('./FormView'))

const RegistrantForm: React.FC<Props> = (props) => {
  const { visible, handleFormCancel } = props
  const { state, fields, handleFormAdd, handleFormEdit } = props

  return (
    <Drawer
      width="80%"
      title={`${addLookEdit[state]}: 员工入职登记表`}
      placement="right"
      onClose={handleFormCancel}
      open={visible}
    >
      <Suspense fallback={<>loading...</>}>
        <FormView {...{ state, handleFormAdd, handleFormEdit, fields }} />
      </Suspense>
    </Drawer>
  )
}

export default RegistrantForm
