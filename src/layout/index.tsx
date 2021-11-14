import React from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'

import Nav from '/@/layout/components/Nav'
import Main from '/@/layout/components/Main'

const navbarList = [
  {
    id: 1,
    label: 'RegistrantList',
    name: 'RegistrantList',
    path: '/default/registrant-list',
  },
]

const Default = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const navChildren = {
    title: 'demo',
    default: (
      <>
        {navbarList.map(({ path, name, label }) => (
          <button
            key={name}
            className={`hover:bg-gray-700 text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium ${
              path === pathname && 'bg-gray-900'
            } ${path !== pathname && 'text-gray-300'}`}
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </>
    ),
  }

  return (
    <>
      <Nav>{navChildren}</Nav>

      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default Default
