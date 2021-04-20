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
import Songs from './songs'
import NavBar from './navbar'

export default function App() {

  return (
    <Router>
        <NavBar />
        <Switch>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}
