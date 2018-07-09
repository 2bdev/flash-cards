import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../assets/css/App.css';
import firebase from '../firebase';
import CreateCard from './CreateCard';
import Card from './Card';

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

    const collectionRef = firebase.database().ref('collections/'+collectionId);
    collectionRef.on('value', (snapshot) => {
      let item = snapshot.val();
      this.setState({
        collection: item
      });
    });

    const cardsRef = firebase.database().ref('cards/'+collectionId);
    cardsRef.on('value', (snapshot) => {
      let cards = snapshot.val();
      let newCards = [];
      snapshot.forEach(function(item) {
        var newCard = item.val();
        newCard.key = item.key;
        newCards.push(newCard);
      });

      this.setState({
        cards: newCards
      });
    });
  }

  render() {
    const { collection, cards } = this.state;
    return (
      <div className="App">
        <h2>{collection.title}</h2>
        <CreateCard collectionId={this.props.match.params.id} />
        <h3>Click the card to reveal the answer</h3>
        {cards.map(item => (
            <Card key={item.key} sideA={item.sideA} sideB={item.sideB} />
        ))}
      </div>
    );
  }
}

export default Collection;
