import React from 'react'
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
    label: 'User',
    key: '/user',
    icon: <MailOutlined />,
    children: [{ label: 'Registrant List', key: '/user/registrant-list' }],
  },
]

interface Props {
  style?: React.CSSProperties | undefined
  collapsed: boolean
}

const Side: React.FC<Props> = ({ style, collapsed }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = ({ key }: MenuInfo) => {
    navigate(key)
  }

  return (
    <Menu
      mode="inline"
      style={style}
      inlineCollapsed={collapsed}
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={['/user']}
      onClick={handleClick}
      items={items}
    />
  )
}

export default Side
