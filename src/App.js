import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Router } from "@reach/router";
import styled from "styled-components";
import Home from "./Pages/Home";
import Header from './components/header'
import Preferences from "./Pages/Preferences";
import NationsContext from "./Stores";
import SearchContext from "./Stores";

const AppContainer = styled.div`
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 900px;
  padding: 10px;
`;

const App = () => {
  const nations = useState("");
  const search = useState("");
  const HomePage = () => <Home />;
  const PreferencesPage = () => <Preferences />;
  return (
    <AppContainer>
      <Helmet>
        <title>Touchbase - your personal address book.</title>
      </Helmet>

      <SearchContext.Provider value={search}>
        <Header />
        <NationsContext.Provider value={nations}>
          <Router>
              <HomePage path="/" />
              <PreferencesPage path="/preferences" />
          </Router>
        </NationsContext.Provider>
      </SearchContext.Provider>
    </AppContainer>
  );
};

export default App;
