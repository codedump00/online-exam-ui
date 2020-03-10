import React, { ReactElement } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface Props {

}

export default function Navbar(): ReactElement {
  return (
    <header className="nav__header">
      <nav>
        <div className="nav__title">
          Online Exam
        </div>
        <div className="nav__links">
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