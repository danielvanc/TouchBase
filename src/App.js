import React from 'react';
import { Helmet } from 'react-helmet'
import { Router, Link } from "@reach/router"
import styled from 'styled-components'
import Header from './components/Header'
import Home from './Pages/Home'
import Settings from './Pages/Settings'

const AppContainer = styled.div`
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 900px;
`

const HomePage = () => <Home />
const SettingsPage = () => <Home />

function App() {
  return (
    <AppContainer>
      <Helmet>
        <title>Touchbase - your personal address book.</title>
      </Helmet>
      <Header />

      <Router>
        <HomePage path="/" />
        <Settings path="/Settings" />
      </Router>
      
    </AppContainer>
  );
}

export default App;
