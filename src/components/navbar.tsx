import React, { ReactElement } from 'react'
import { Button, Switch, Avatar, Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'
import sun from '../sun.svg'
import moon from '../moon.svg'

import './components.css'

interface Props {

}


export default function Navbar(): ReactElement {
  return (
    <header className="nav__header">
      <nav>
        <Link to="/">
          <div className="nav__title"
            style={{
              backgroundImage: `url('${Logo}')`
            }} ></div>
        </Link>
        <div className="nav__links">
          <Switch
            checkedChildren={<div style={{
              width: '15px',
              height: '15px',
              backgroundImage: `url('${moon}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}></div>}
            unCheckedChildren={<div style={{
              width: '15px',
              height: '15px',
              backgroundImage: `url('${sun}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}></div>}
          />
          <Link to="/">
            <Button type="link">Home</Button>
          </Link>
          <Link to="/login">
            <Button type="link">Login</Button>
          </Link>
          <Popover
            placement="bottomLeft"
            content={<div>
              <p>Content</p>
              <p>Content</p>
            </div>}
          >
            <Avatar
              size={40}
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
              className="nav__avatar" />
          </Popover>

        </div>
      </nav>
    </header>
  )
}