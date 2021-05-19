import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/pages/Home';

function App() {
  return (
    
    <Router>
      <div>
    <Navbar />
    <Switch>
      <Route path='/' exact component= {Home} />
    </Switch>
    </div>
    </Router>
  
  );
}

export default App;
