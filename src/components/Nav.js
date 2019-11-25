import React from 'react'
import { Router, Link } from "@reach/router";
import Preferences from '../Pages/Preferences'

const Nav = () => (
  <>
    <Router>
      <Preferences path="/preferences" />
    </Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/preferences">Preferences</Link>
      </li>
    </ul>
  </>
)

export default Nav;