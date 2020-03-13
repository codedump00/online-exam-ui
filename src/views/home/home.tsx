import React from "react"
import { Button } from "antd"
import { Link } from "react-router-dom"

import './home.css'

export default function HomePage() {
  return <div className="home__page">
    <h2>Korean Online Examination</h2>
    <p>Please login to take exam!</p>
    <Link to="/login">
      <Button type="primary">Login now for Examination</Button>
    </Link>

  </div>
}