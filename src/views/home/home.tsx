import React from "react"
import { Button } from "antd"
import { Link } from "react-router-dom"

import './home.css'

export default function HomePage() {
  document.getElementById('footer')?.style.setProperty('display', 'flex');
  return <div className="home__page">
    <h2 className="home__head">Korean Online Examination</h2>
    <p>Please login to take exam!</p>
    <Link to="/login">
      <Button type="primary">Login now for Examination</Button>
    </Link>

  </div>
}