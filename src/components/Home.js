import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import CollectionList from './CollectionList';
import '../assets/css/App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flash Cards</h1>
        <CollectionList />
      </div>
    );
  }
}

export default Home;
