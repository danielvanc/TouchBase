import React, { useContext, createContext, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Router, Link } from "@reach/router"
import styled from 'styled-components'
import Home from './Pages/Home'
import Preferences from './Pages/Preferences'

const AppContainer = styled.div`
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 900px;
  padding: 10px;
`

const Header = styled.div`
`

const App = () => {

  const [nations, setNation] = useState([]);
  
  /**
   * handler state func for setting nations in prefs page
  */
  
  const handleNations = (nationsArray) => {
    setNation(nationsArray)
  } 

  const HomePage = () => <Home />
  const PreferencesPage = () => <Preferences setNations={handleNations} />

  return (
    <AppContainer>
      
      <Helmet>
        <title>Touchbase - your personal address book.</title>
      </Helmet>

      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/preferences">Preferences</Link>
          </li>
        </ul>
      </Header>

      <Router>
        <HomePage path="/" nations={nations} />
        <PreferencesPage path="/preferences" />
      </Router>
    
    </AppContainer>
  );
  
}


export default App;