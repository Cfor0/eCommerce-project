import './App.css';
import React, { Component } from 'react';
import Products from './components/Products/Products'

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <div className='body'>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/contact' component={Contact} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
