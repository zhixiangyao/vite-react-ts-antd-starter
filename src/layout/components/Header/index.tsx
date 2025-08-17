import type { MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, theme } from 'antd'
import React, { memo, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { stringCapitalization } from '~/utils/string'

const items: MenuProps['items'] = [
  {
    label: 'Logout',
    key: '2',
  },
]

interface Props {}

export const Header = memo<Props>(() => {
  const { token } = theme.useToken()
  const { pathname } = useLocation()

  const title = useMemo(() => {
    const list = pathname.split('/').pop()?.split('-')

    return list?.map(str => stringCapitalization(str)).join(' ')
  }, [pathname])

  const menuProps = useMemo(() => ({ items }), [])

  return (

    <header
      className="flex h-[50px] w-full items-center justify-between px-3"
      style={{ backgroundColor: token.colorBgContainerDisabled }}
    >
      <span className="font-700 text-[20px]">{title}</span>

      <div className="flex items-center">
        <Dropdown menu={menuProps} disabled>
          <Avatar size="small" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </header>

  )
})
Header.displayName = 'Header'
