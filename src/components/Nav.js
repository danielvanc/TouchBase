import React from 'react'
import { Router, Link } from "@reach/router";
import Preferences from '../Pages/Preferences'

const Nav = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/preferences">Preferences</Link>
      </li>
    </ul>
    <Router>
      <Preferences path="/preferences" />
    </Router>
  </>
)

export default Nav;