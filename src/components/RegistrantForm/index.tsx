import React from 'react'
import { Modal } from 'antd'

interface Props {
  visible: boolean
  handleOk: () => void
  handleCancel: () => void
  state: 'add' | 'look' | 'edit'
}

const RegistrantForm: React.FC<Props> = ({ visible, handleOk, handleCancel, state }) => {
  const addLookEdit = {
    add: '添加',
    look: '查看',
    edit: '编辑',
  }

  return (
    <>
      <Modal
        title={`${addLookEdit[state]}: 员工入职登记表`}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default RegistrantForm
