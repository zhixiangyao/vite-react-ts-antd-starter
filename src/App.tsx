import { ConfigProvider } from 'antd'
import React from 'react'
import { Provider } from 'react-redux'

import { Router } from '~/router'
import { store } from '~/store'
import { formConfig, getPopupContainerConfig } from '~/utils/ant'

import '~/styles/global.css'

export function App() {
  return (
    <ConfigProvider form={formConfig} getPopupContainer={getPopupContainerConfig}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  )
}
