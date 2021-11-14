import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const Layout = lazy(() => import('/@/layout'))
const RegistrantList = lazy(() => import('/@/views/RegistrantList'))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={'/default/registrant-list'} />} />

        {/* This is nested router, maybe you can use the useRoutes. */}
        <Route
          path="/default"
          element={
            <Suspense fallback={<>loading Layout</>}>
              <Layout />
            </Suspense>
          }
        >
          {/* In Layout */}
          <Route
            path="/default/registrant-list"
            element={
              <Suspense fallback={<>loading RegistrantList</>}>
                <RegistrantList />
              </Suspense>
            }
          />

          {/* 404 */}
          <Route path="/default/*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
