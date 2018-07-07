import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../assets/css/App.css';

const collections = [
  {
		"id": 1,
    "title": "State Capitals",
    "cardCount": 50
  },
  {
		"id": 2,
    "title": "World Capitals",
    "cardCount": 190
  },
  {
		"id": 3,
    "title": "US Presidents",
    "cardCount": 45
  },
];

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: {}
    };
  }

  componentDidMount() {
    const collectionId = this.props.match.params.id;

    let curCollection = {};
    collections.forEach(function(elem) {
      if(elem.id == collectionId) {
        curCollection = elem;
      }
    });

    this.setState({
      collection: curCollection
    });
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="App">
        <h2>{collection.title}</h2>
      </div>
    );
  }
}

export default Collection;
