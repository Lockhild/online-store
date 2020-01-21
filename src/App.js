import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage.jsx'

const HatsPage = () => (
  <div>
    <ul class="uk-breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/hats">Hats</a></li>
      <li><a href="/jackets">Jackets</a></li>
      <li><a href="/sneakers">Sneakers</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/men">Men</a></li>
    </ul>
    <h1>Hats Page</h1>
  </div>
);
const JacketsPage = () => (
  <div>
    <ul class="uk-breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/hats">Hats</a></li>
      <li><a href="/jackets">Jackets</a></li>
      <li><a href="/sneakers">Sneakers</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/men">Men</a></li>
    </ul>
    <h1>Jackets Page</h1>
  </div>
);
const SneakersPage = () => (
  <div>
    <ul class="uk-breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/hats">Hats</a></li>
      <li><a href="/jackets">Jackets</a></li>
      <li><a href="/sneakers">Sneakers</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/men">Men</a></li>
    </ul>
    <h1>Sneakers Page</h1>
  </div>
);
const WomenPage = () => (
  <div>
    <ul class="uk-breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/hats">Hats</a></li>
      <li><a href="/jackets">Jackets</a></li>
      <li><a href="/sneakers">Sneakers</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/men">Men</a></li>
    </ul>
    <h1>Women Page</h1>
  </div>
);
const MenPage = () => (
  <div>
    <ul class="uk-breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/hats">Hats</a></li>
      <li><a href="/jackets">Jackets</a></li>
      <li><a href="/sneakers">Sneakers</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/men">Men</a></li>
    </ul>
    <h1>Men Page</h1>
  </div>
);

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
