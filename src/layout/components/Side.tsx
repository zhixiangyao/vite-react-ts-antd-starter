import React, { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'

// rc-menu
export interface MenuInfo {
  key: string
  keyPath: string[]
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
}

const items = [
  {
    label: 'Registrant List',
    key: '/registrant-list',
    icon: <MailOutlined />,
  },
]

interface Props {
  style?: React.CSSProperties | undefined
  collapsed: boolean
}

const Side: React.FC<Props> = ({ style, collapsed }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = useCallback(
    ({ key }: MenuInfo) => {
      pathname !== key && navigate(key)
    },
    [navigate, pathname],
  )

  return (
    <Menu
      mode="inline"
      style={style}
      inlineCollapsed={collapsed}
      defaultSelectedKeys={[pathname]}
      onClick={handleClick}
      items={items}
    />
  )
}

export default Side
