import React, { memo } from 'react'

import { Page } from '/@/components/Page'

import { useMonster } from './hooks'
import { RegistrantListPageHeader } from './components/RegistrantListPageHeader'
import { RegistrantListPageTable } from './components/RegistrantListPageTable'
import { RegistrantListPageDrawer } from './components/RegistrantListPageDrawer'

export const RegistrantListPage = memo(() => {
  const monster = useMonster()

  const { handleAdd } = monster
  const { handleTableLook, handleTableEdit, handleTableDelete } = monster
  const { hideFormView, handleFormAdd, handleFormEdit } = monster
  const { isModalVisible, fields, state, registrantList } = monster

  return (
    <Page headerLess>
      <RegistrantListPageHeader handleAdd={handleAdd} />

      <RegistrantListPageTable
        list={registrantList}
        handleLook={handleTableLook}
        handleEdit={handleTableEdit}
        handleDelete={handleTableDelete}
      />

      <RegistrantListPageDrawer
        visible={isModalVisible}
        fields={fields}
        state={state}
        handleFormCancel={hideFormView}
        handleFormAdd={handleFormAdd}
        handleFormEdit={handleFormEdit}
      />
    </Page>
  )
})
RegistrantListPage.displayName = 'RegistrantListPage'
