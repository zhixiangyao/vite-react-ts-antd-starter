import type { MenuProps } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import { useBoolean } from 'ahooks'
import { Layout, Menu } from 'antd'
import clsx from 'clsx'
import { useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { routes } from '~/router'
import { stringCapitalization } from '~/utils/string'

function Nav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [collapsed, { toggle }] = useBoolean(true)

  const handleClick = useCallback<NonNullable<MenuProps['onClick']>>(
    ({ key }) => {
      pathname !== key && navigate(key)
    },
    [navigate, pathname],
  )

  const menus = useMemo(
    () => routes.map(({ path, label, icon }) => ({ key: path, label, icon })),
    [],
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
        className="sticky top-0 z-1 flex h-17.5 w-full cursor-pointer select-none items-center justify-center"
        onClick={toggle}
      >
        <HeartTwoTone className="text-xl" />
      </div>

      <div
        className={clsx(
          collapsed ? 'text-[40px] leading-10' : 'text-[100px] leading-25',
          'absolute bottom-20 w-full text-center text-white opacity-20 transition-all duration-200 ease-[ease]',
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
        items={menus}
      />
    </Layout.Sider>
  )
}

export { Nav }
