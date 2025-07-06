import React, { memo } from 'react'

import { Page } from '~/components/Page'

import { RegistrantListPageDrawer } from './components/RegistrantListPageDrawer'
import { RegistrantListPageHeader } from './components/RegistrantListPageHeader'
import { RegistrantListPageTable } from './components/RegistrantListPageTable'
import { useRegistrantList } from './hooks/useRegistrantList'

export const RegistrantListPage = memo(() => {
  const registrantList = useRegistrantList()

  const { handleAdd } = registrantList
  const { handleTableLook, handleTableEdit, handleTableDelete } = registrantList
  const { handleFormCancel, handleFormAdd, handleFormEdit } = registrantList
  const { isModalVisible, fields, state, list } = registrantList

  return (
    <Page headerLess>
      <RegistrantListPageHeader handleAdd={handleAdd} />

      <RegistrantListPageTable
        list={list}
        handleLook={handleTableLook}
        handleEdit={handleTableEdit}
        handleDelete={handleTableDelete}
      />

      <RegistrantListPageDrawer
        visible={isModalVisible}
        fields={fields}
        state={state}
        handleFormCancel={handleFormCancel}
        handleFormAdd={handleFormAdd}
        handleFormEdit={handleFormEdit}
      />
    </Page>
  )
})
RegistrantListPage.displayName = 'RegistrantListPage'
