import React from 'react'
import { Router, Link } from "@reach/router";
import Settings from '../Pages/Settings'

const Nav = () => (
  <>
    <Router>
      <Settings path="/settings" />
    </Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </>
)

export default Nav;