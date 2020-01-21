import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page.jsx';
import HatsPage from './pages/hats-page.jsx';
import JacketsPage from './pages/jackets-page.jsx';
import SneakersPage from './pages/sneakers-page.jsx';
import WomenPage from './pages/women-page.jsx';
import MenPage from './pages/men-page.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/jackets' component={JacketsPage} />
        <Route exact path='/sneakers' component={SneakersPage} />
        <Route exact path='/women' component={WomenPage} />
        <Route exact path='/men' component={MenPage} />
      </Switch>
    </div>
  );
}

export default App;
