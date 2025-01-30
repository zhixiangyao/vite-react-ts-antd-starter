import { ConfigProvider } from 'antd'
import React from 'react'
import { Provider } from 'react-redux'

import '/@/styles/global.css'
import { Router } from '/@/router'
import { store } from '/@/store'

import { formConfig, getPopupContainerConfig } from '/@/utils/ant'

export function App() {
  return (
    <ConfigProvider form={formConfig} getPopupContainer={getPopupContainerConfig}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  )
}
