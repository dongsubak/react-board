import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import App1 from './App1';
//import App2 from './App2';
//import App3 from './App3';
//import App4 from './App4';
//import App5 from './App5';
//import App6 from './App6';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App1} />
          <Route exact path="/App1" component={App1}/>

        </div>
      </Router>   
    );
  }
}

export default App;
