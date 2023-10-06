import React, { Suspense, lazy } from 'react'
import { Button } from 'antd'

import { Page } from '/@/components/Page'

import { useMonster } from './hooks'

const RegistrantForm = lazy(() => import('./components/RegistrantForm'))
const RegistrantTableList = lazy(() => import('./components/RegistrantTableList'))

const RegistrantList: React.FC = () => {
  const monster = useMonster()

  const { handleAdd } = monster
  const { handleTableLook, handleTableEdit, handleTableDelete } = monster
  const { hideFormView, handleFormAdd, handleFormEdit } = monster
  const { isModalVisible, fields, state, registrantList } = monster

  return (
    <Page headerLess>
      <Button type="primary" className="mb-5 self-end" onClick={handleAdd}>
        添加
      </Button>

      <Suspense fallback={<>loading...</>}>
        <RegistrantTableList
          list={registrantList}
          handleLook={handleTableLook}
          handleEdit={handleTableEdit}
          handleDelete={handleTableDelete}
        />
      </Suspense>

      <Suspense fallback={<>loading...</>}>
        <RegistrantForm
          visible={isModalVisible}
          fields={fields}
          state={state}
          handleFormCancel={hideFormView}
          handleFormAdd={handleFormAdd}
          handleFormEdit={handleFormEdit}
        />
      </Suspense>
    </Page>
  )
}

export default RegistrantList
