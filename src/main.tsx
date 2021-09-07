import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'antd/dist/antd.css'

import App from '/@/App'
import store from '/@/store'
import { getElementById } from '/@/utils'
import '/@/assets/index.css'

const rootElement = getElementById('root')

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>
  rootElement,
)
