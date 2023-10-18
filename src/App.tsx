import React from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

import { store } from '/@/store'
import { Router } from '/@/router'
import { formConfig, getPopupContainerConfig } from '/@/utils/ant'

import '/@/styles/global.css'

export const App = () => {
  return (
    <ConfigProvider form={formConfig} getPopupContainer={getPopupContainerConfig}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  )
}
