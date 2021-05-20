import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/pages/Home';
import GalleryPage from './Component/pages/GalleryPage';
import OrderPage from './Component/pages/OrderPage';
import ContactPage from './Component/pages/ContactPage';


function App() {
  return (
    
    <Router>
      <div>
    <Navbar />
    <Switch>
      <Route path='/' exact component= {Home} />
      <Route path='/Gallery' exact component= {GalleryPage} />
      <Route path='/Contact' exact component= {ContactPage} />
      <Route path='/Order-Online' exact component= {OrderPage} />

    </Switch>
    </div>
    </Router>
  
  );
}

export default App;
