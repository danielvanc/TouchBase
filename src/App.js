import React from 'react';
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Header from './components/Header'

const AppContainer = styled.div`
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 900px;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Helmet>
        <title>Touchbase - your personal address book.</title>
      </Helmet>
      <p>Thet's start building!</p>
    </AppContainer>
  );
}

export default App;
