import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/collection/:id' component={Collection}/>
      </Switch>
    );
  }
}

export default App;
