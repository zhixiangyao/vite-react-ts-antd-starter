import React, { memo, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Dropdown, type MenuProps, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { stringCapitalization } from '/@/utils/string'

const items: MenuProps['items'] = [
  {
    label: 'Logout',
    key: '2',
  },
]

type Props = {}

export const Header = memo<Props>(() => {
  const { pathname } = useLocation()

  const title = useMemo(() => {
    const list = pathname.split('/').pop()?.split('-')

    return list?.map((str) => stringCapitalization(str)).join(' ')
  }, [pathname])

  const menuProps = useMemo(() => ({ items }), [])

  return (
    <>
      <header className="flex h-[50px] w-full items-center justify-between bg-gray-200 px-3">
        <span className="font-700 text-[20px]">{title}</span>

        <div className="flex items-center">
          <Dropdown menu={menuProps} disabled>
            <Avatar size="small" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </header>
    </>
  )
})
Header.displayName = 'Header'
