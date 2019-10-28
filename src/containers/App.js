import React, {Component} from 'react';
import './App.css';
import Home from '../components/home/Home';
import Navigation from '../components/Navigation';
import './navigation-home.css'

class App extends Component  {
  render() {
    return (
      <div>
        <div className="navigation-home">
          <Navigation />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
