import React, { ReactElement } from 'react'
import './dashboard.css'

interface Props {

}

export default function Dashboard(): ReactElement {
  document.getElementById('footer')?.style.setProperty('display', 'flex');
  return (
    <div className="dashboard">
      <div className="dash__side__menu"></div>
      <div className="dash__main__content"></div>
    </div>
  )
}
