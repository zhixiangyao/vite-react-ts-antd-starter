import React from 'react'
import { Provider } from 'react-redux'
import { Routes } from '/@/router'
import { store } from '/@/store'

import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'antd/dist/reset.css'
import '/@/assets/index.css'

const App = () => {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
    // </React.StrictMode>
  )
}

export default App
