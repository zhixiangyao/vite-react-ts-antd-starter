import React, { memo, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, Layout, type MenuProps } from 'antd'
import { HeartTwoTone, MailOutlined } from '@ant-design/icons'
import { useBoolean } from 'ahooks'
import clsx from 'clsx'

import { stringCapitalization } from '/@/utils/string'

const items = [
  {
    label: 'Registrant List',
    key: '/registrant-list',
    icon: <MailOutlined />,
  },
  {
    label: 'Test',
    key: '/test',
    icon: <MailOutlined />,
  },
]

type Props = {}

export const Nav = memo<Props>(() => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [collapsed, { toggle }] = useBoolean(true)

  const handleClick = useCallback<NonNullable<MenuProps['onClick']>>(
    ({ key }) => {
      pathname !== key && navigate(key)
    },
    [navigate, pathname],
  )

  return (
    <Layout.Sider
      className="min-h-screen"
      width={200}
      collapsed={collapsed}
      collapsible
      onCollapse={toggle}
    >
      <div
        className="sticky top-0 z-[1] flex h-[70px] w-full cursor-pointer select-none items-center justify-center"
        onClick={toggle}
      >
        <HeartTwoTone className="text-xl" />
      </div>

      <div
        className={clsx(
          collapsed ? 'text-[40px] leading-[40px]' : 'text-[100px] leading-[100px]',
          'absolute bottom-20 w-full text-center text-white opacity-20 transition-all duration-[0.2s] ease-[ease]',
        )}
      >
        {stringCapitalization(import.meta.env.VITE_APP_NODE_ENV.slice(0, 3))}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        forceSubMenuRender={false}
        defaultSelectedKeys={[pathname]}
        onClick={handleClick}
        items={items}
      />
    </Layout.Sider>
  )
})
Nav.displayName = 'Nav'
