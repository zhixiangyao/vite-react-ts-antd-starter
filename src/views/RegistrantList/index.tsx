import React from 'react'
import { Button } from 'antd'

import RegistrantForm from './components/RegistrantForm'
import RegistranTableList from './components/RegistranTableList'
import { useMonster } from './hooks'

const RegistrantList: React.FC = () => {
  const monster = useMonster()

  const { handleAdd } = monster
  const { handleTableLook, handleTableEdit, handleTableDelete } = monster
  const { hideFormView, handleFormAdd, handleFormEdit } = monster
  const { isModalVisible, fields, state, list } = monster

  return (
    <>
      <Button type="primary" className="mb-3 self-end" onClick={handleAdd}>
        添加
      </Button>

      <RegistranTableList
        list={list}
        handleLook={handleTableLook}
        handleEdit={handleTableEdit}
        handleDelete={handleTableDelete}
      />

      <RegistrantForm
        visible={isModalVisible}
        fields={fields}
        state={state}
        handleFormCancel={hideFormView}
        handleFormAdd={handleFormAdd}
        handleFormEdit={handleFormEdit}
      />
    </>
  )
}

export default RegistrantList
