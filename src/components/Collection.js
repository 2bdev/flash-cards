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

    this.addedCard = this.addedCard.bind(this);
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

  addedCard() {
    const collectionId = this.props.match.params.id;
    const collectionRef = firebase.database().ref('collections/'+collectionId);

    let newCount = this.state.collection.cardCount + 1;
    console.log("newcount: " + newCount);
    collectionRef.update({
      cardCount: newCount
    });
  }

  render() {
    const { collection, cards } = this.state;
    return (
      <div className="App">
        <h2>{collection.title} ({collection.cardCount})</h2>
        <CreateCard collectionId={this.props.match.params.id} addCard={this.addedCard} />
        <h3>Click the card to reveal the answer</h3>
        {cards.map(item => (
            <Card key={item.key} sideA={item.sideA} sideB={item.sideB} />
        ))}
      </div>
    );
  }
}

export default Collection;
