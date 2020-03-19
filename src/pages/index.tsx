import React, { ReactElement, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './home';
import LoginPage from './login';
import NotFoundPage from './404';
import Navbar from '../components/navbar';
import '../index.css';
import ExamPage from './exam';
import DashboardPage from './dashboard';
import ExamDetails from '../views/exam/details';
import AdminPage from './admin';

interface Props {
}


export default function Layout(): ReactElement {
  const [navbar, setNavbar] = useState(Navbar);

  return (
    <Router>
      <div className="layout">
        {navbar}
        <main className="main">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/exam">
              <ExamPage setNavbar={setNavbar} />
            </Route>
            <Route path="/dashboard">
              <Route exact path="/dashboard">
                <DashboardPage />
              </Route>
              <Route path="/dashboard/exam/:examID/details">
                <ExamDetails setNavbar={setNavbar} />
              </Route>
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
        <footer id="footer">
          © {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  )
}
