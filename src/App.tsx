import React from 'react'
import { Routes } from 'react-router-dom'
import { routes, genRoute } from './router'

const App = () => {
  return <Routes>{routes.map((route) => genRoute(route))}</Routes>
}

export default App
