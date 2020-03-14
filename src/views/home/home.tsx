import React from "react"
import { Button } from "antd"
import { Link } from "react-router-dom"

import './home.css'

export default function HomePage() {
  document.getElementById('footer')?.style.setProperty('display', 'flex');
  return <div className="home__page">
    <h2 className="home__head">Not sure about your skills ? <br />
      We can help you with our online exams!
    </h2>

    <Link to="/login">
      <Button type="primary" className="login__prompt">Login now for Examination</Button>
    </Link>

  </div>
}