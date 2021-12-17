import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

// rc-menu
export interface MenuInfo {
  key: string
  keyPath: string[]
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
}

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
    >
      <SubMenu key="/user" icon={<MailOutlined />} title="User">
        <Menu.Item key="/user/registrant-list">Registrant List</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default Side
