import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import routes from './routes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* IMPORT link at the top from react-router-dom,  and use LINK
      and 'to' to direct the link to the route you want to access */}
        <div className="nav">
          <Link to='/'><span>HOME</span></Link>
          <br />
          <Link to='/second'><span>Don't click me...</span></Link>
          <br/>
          <Link to='/third'><span>Click me...</span></Link>
        </div>

        {/* Switch allows us to display only ONE view at a time that matches
      the route path */}
      {routes}
      </div>
    );
  }
}

export default App;
