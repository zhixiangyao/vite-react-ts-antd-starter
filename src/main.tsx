import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import 'antd/dist/antd.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import App from '/@/App'
import { store } from '/@/store'
import { getElementById } from '/@/utils'
import '/@/assets/index.css'

const rootElement = getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
)
