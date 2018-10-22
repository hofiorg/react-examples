import React, { Component } from 'react';
import Hello from './Hello';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello name="Hofi"/>
        </header>
      </div>
    );
  }
}

export default App;
