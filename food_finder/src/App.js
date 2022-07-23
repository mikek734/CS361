import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import UserOptions from './pages/UserOptions';
import RecipeRequest from './pages/RecipeRequest';

function App() {  

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/useroptions">
            <UserOptions />
          </Route>
          <Route path="/recipes">
            <RecipeRequest />
          </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
