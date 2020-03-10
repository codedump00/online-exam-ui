import React, { ReactElement } from 'react'
import { Button, Switch } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'

import './components.css'

interface Props {

}

export default function Navbar(): ReactElement {
  return (
    <header className="nav__header">
      <nav>
        <div className="nav__title" style={{
          backgroundImage: `url('${Logo}')`
        }}>

        </div>
        <div className="nav__links">
          <Switch
            checkedChildren={<h3>Dark</h3>}
            unCheckedChildren={<h3>Light</h3>}
          />
          <Link to="/">
            <Button type="link">Home</Button>
          </Link>
          <Link to="/login">
            <Button type="link">Login</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}