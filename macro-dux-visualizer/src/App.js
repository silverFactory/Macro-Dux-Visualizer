import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './home'
import Demo from './demo'
import User from './user'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>

        <Switch>          
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
