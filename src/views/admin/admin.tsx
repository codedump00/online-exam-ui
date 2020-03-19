import React, { ReactElement, useState } from 'react'

import './admin.css'
import AdminSideBar from './components/sideBar'
import UserTable from './components/userTable'

interface Props {

}

export default function AdminPage(): ReactElement {
  const [active, setActive] = useState('overview');

  return (
    <div className="admin__page">
      <div className="admin__side__menu">
        <AdminSideBar handlers={[active, setActive]} />
      </div>
      <div className="admin__contents">
        {
          active === 'overview' && <>
          </>
        }
        {
          active === 'users' && <>
            <div className="admin__user__overview">
              <div className="info__chip">
                <h3>Total Users</h3>
                <h4>5</h4>
              </div>
              <div className="info__chip active__user">
                <h3>Active Users</h3>
                <h4>2</h4>
              </div>
            </div>
            <div className="user__table">
              <h2>User Details & Overview</h2>
              <UserTable />
            </div></>
        }
        {
          active === 'moderators' && <>
            <div className="admin__user__overview">
              <div className="info__chip">
                <h3>Total Moderators</h3>
                <h4>5</h4>
              </div>
              <div className="info__chip active__user">
                <h3>Active Moderators</h3>
                <h4>2</h4>
              </div>
            </div>
            <div className="user__table">
              <h2>Moderator Details & Overview</h2>
              <UserTable />
            </div></>
        }
        {
          active === 'exams' && <>
            <div className="admin__user__overview">
              <div className="info__chip">
                <h3>Exam Listings</h3>
                <h4>5</h4>
              </div>
              <div className="info__chip active__user">
                <h3>Upcoming Exams</h3>
                <h4>2</h4>
              </div>
              <div className="info__chip active__user">
                <h3>Ongoing Exams</h3>
                <h4>2</h4>
              </div>
            </div>
            <div className="user__table">
              <h2>Exam Details & Overview</h2>
              <UserTable />
            </div></>
        }
      </div>
    </div>
  )
}
