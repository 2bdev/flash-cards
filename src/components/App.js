import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/collection/:id' component={Collection}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
