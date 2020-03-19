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

  const isLight = localStorage.getItem('theme') === null ? true :
    localStorage.getItem('theme') === 'true';

  // setIsLight(localStorage.getItem('theme') === 'true');



  const handleThemeChange = (checked: boolean) => {
    localStorage.setItem('theme', `${checked}`)
    if (!checked) {
      document.documentElement.style.setProperty('--body', "#293742");
      document.documentElement.style.setProperty('--nav', "#293742");
      document.documentElement.style.setProperty('--shadow', "#202B33");
      document.documentElement.style.setProperty('--card', "#394B59");
      document.documentElement.style.setProperty('--text', "#f0f0f0");
      document.documentElement.style.setProperty('--admin-menu', "#001529");
    } else {
      document.documentElement.style.setProperty('--body', "#ffffff");
      document.documentElement.style.setProperty('--nav', "#ffffff");
      document.documentElement.style.setProperty('--shadow', "#d9d9d9");
      document.documentElement.style.setProperty('--card', "#ffffff");
      document.documentElement.style.setProperty('--text', "#141414");
      document.documentElement.style.setProperty('--admin-menu', "#ffffff");
    }
  }
  handleThemeChange(isLight);
  return (
    <header className="nav__header" id="nav__header">
      <nav>
        <Link to="/">
          <div className="nav__title"
            style={{
              backgroundImage: `url('${Logo}')`
            }} ></div>
        </Link>
        <div className="nav__links">
          <Switch
            defaultChecked={isLight}
            onChange={handleThemeChange}
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
              <Link to="/dashboard">
                <p className="popup__over">Dashboard</p>
              </Link>
              <p className="popup__over">Home</p>
              <p className="popup__over">Logout</p>
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