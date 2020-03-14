import React, { ReactElement } from 'react'
import './dashboard.css'

interface Props {

}

export default function Dashboard(): ReactElement {
  document.getElementById('footer')?.style.setProperty('display', 'flex');
  return (
    <div>

    </div>
  )
}
