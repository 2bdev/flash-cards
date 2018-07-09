import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../assets/css/App.css';
import firebase from '../firebase';

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: {},
      cards: []
    };
  }

  componentDidMount() {
    const collectionId = this.props.match.params.id;

    const itemRef = firebase.database().ref('collections/'+collectionId);
    itemRef.on('value', (snapshot) => {
      let item = snapshot.val();
      console.log(item);
      this.setState({
        collection: item
      });
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
