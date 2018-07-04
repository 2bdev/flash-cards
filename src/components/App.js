import React, { Component } from 'react';
import CollectionList from './CollectionList';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flash Cards</h1>
        <CollectionList />
      </div>
    );
  }
}

export default App;
