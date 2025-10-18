import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '~/App'

import '@ant-design/v5-patch-for-react-19'

const rootElement = document.querySelector('#root')!

const app = createRoot(rootElement!)

app.render(<App />)
