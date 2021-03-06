import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage.js'
import SearchPage from './components/pages/SearchPage.js'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/search" component={ SearchPage } />
      </Switch>
    </div>
  );
};

export default App
