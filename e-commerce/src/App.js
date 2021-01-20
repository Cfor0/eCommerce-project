import './App.css';
import React, { Component } from 'react';
import Products from './components/Products'

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <div className='body'>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/contact' component={Products} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
