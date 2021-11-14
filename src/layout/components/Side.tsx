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
}

const Side: React.FC<Props> = ({ style }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const handleClick = ({ key }: MenuInfo) => {
    navigate(key)
  }

  const defaultSelectedKeys = [pathname]

  return (
    <Menu
      onClick={handleClick}
      style={style}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={['/default']}
      mode="inline"
    >
      <SubMenu key="/default" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="/default/registrant-list">Option 1</Menu.Item>
        <Menu.Item key="/default/2">Option 2</Menu.Item>
        <Menu.Item key="/default/3">Option 3</Menu.Item>
        <Menu.Item key="/default/4">Option 4</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default Side
