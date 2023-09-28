import React from 'react'
import { Provider } from 'react-redux'

import Router from '/@/router'
import { store } from '/@/store'

import '/@/styles/global.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
