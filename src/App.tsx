import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const Layout = lazy(() => import('/@/layout'))
const RegistrantList = lazy(() => import('/@/views/RegistrantList'))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={'/user/registrant-list'} />} />

        {/* This is nested router, maybe you can use the useRoutes. */}
        <Route
          path="/user"
          element={
            <Suspense fallback={<>loading Layout</>}>
              <Layout />
            </Suspense>
          }
        >
          {/* User => Registrant List */}
          <Route
            path="/user/registrant-list"
            element={
              <Suspense fallback={<>loading RegistrantList</>}>
                <RegistrantList />
              </Suspense>
            }
          />

          {/* User => 404 */}
          <Route path="/user/*" element={<div>Not Found</div>} />
        </Route>

        {/* All => 404 */}
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
