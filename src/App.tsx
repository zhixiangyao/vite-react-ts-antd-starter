import React from 'react'
import { Provider } from 'react-redux'

import { Routes } from '/@/router'
import { store } from '/@/store'

import '/@/styles/global.css'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
