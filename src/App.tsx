import React from 'react'
import { Provider } from 'react-redux'

import { AntConfigProvider } from '~/components/AntConfigProvider'
import { Router } from '~/router'
import { store } from '~/store'

import '~/styles/app.css'

export function App() {
  return (
    <AntConfigProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </AntConfigProvider>
  )
}
