import React from 'react'
import { createRoot } from 'react-dom/client'

import App from '/@/App'
import { getElementById } from '/@/utils'
import '/@/assets/index.css'

const rootElement = getElementById('root')

const app = createRoot(rootElement!)

app.render(<App />)
