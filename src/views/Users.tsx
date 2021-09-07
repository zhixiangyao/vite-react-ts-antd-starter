import React from 'react'
import { Observer } from 'mobx-react'

import { useLocalStore } from '/@/hooks'

function Users() {
  const localStore = useLocalStore()

  return (
    <Observer>
      {() => (
        <>
          <h2>
            <span>mobxCount: </span>
            <span>{localStore.count}</span>
          </h2>
        </>
      )}
    </Observer>
  )
}

export default Users
