import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SlideShow from './components/SlideShow';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <SlideShow />
      </div>
    );
  }

}

export default App;
