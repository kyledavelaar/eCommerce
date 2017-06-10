import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    );
  }
}

export default App;
