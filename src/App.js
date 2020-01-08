import React from 'react';
import { Helmet } from 'react-helmet'
import { Router } from "@reach/router"
import styled from 'styled-components'
import Header from './components/Header'
import Home from './Pages/Home'
import Preferences from './Pages/Preferences'

const AppContainer = styled.div`
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 900px;
  padding: 10px;
`

const HomePage = () => <Home />
const PreferencesPage = () => <Preferences />

function App() {
  return (
    <AppContainer>
      <Helmet>
        <title>Touchbase - your personal address book.</title>
      </Helmet>
      <Header />

      <Router>
        <HomePage path="/" />
        <PreferencesPage path="/Preferences" />
      </Router>
      
    </AppContainer>
  );
}

export default App;
