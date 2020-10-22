import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './containers/Home';
import Contacts from './containers/Contacts';
import Dashboard from './containers/Dashboard';
import AppProvider from './store/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/app">
              <Dashboard />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

      </Router>
    </AppProvider>
  );
}

export default App;
