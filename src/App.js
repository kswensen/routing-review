import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/roster'>Roster</Link>
        <Link to='/schedule'>Schedule</Link>
        </nav>
        { router }
      </div>
    );
  }
}

export default App;
