import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
      </div>
    );
  }
}

export default App;
