import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import NotFoundPage from './pages/404';
import Navbar from './components/navbar';
import './index.css';

const Layout = () => (
  <Router>
    <div className="layout">
      <Navbar />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  </Router>
)

ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
