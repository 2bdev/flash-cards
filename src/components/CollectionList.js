import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import update from 'immutability-helper';
import CollectionListItem from './CollectionListItem';
import CreateCollection from './CreateCollection';
import firebase from '../firebase';

class CollectionList extends Component {
  constructor(props) {
		super(props);

    this.state = {
      collections: []
    };

    this.onCreate = this.onCreate.bind(this);
	}

  componentDidMount() {
    const itemsRef = firebase.database().ref('collections');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          cardCount: items[item].cardCount
        });
      }
      this.setState({
        collections: newState
      });
    });
  }

  onCreate(data) {
    const collectionRef = firebase.database().ref('collections');
    const newCollection = { title: data.newTitle, cardCount: 0 };
    collectionRef.push(newCollection);

    // this.setState((prevState, props) => {
		// 	// get next id
		// 	let maxId = 0;
		// 	prevState.collections.forEach(function(elem) {
		// 		if(elem.id > maxId) {
		// 			maxId = elem.id;
		// 		}
		// 	});
		// 	let nextId = maxId + 1;
		// 	const newCollection = { id: nextId, title: data.newTitle, cardCount: 0 };
    //   const newCollections = update(prevState.collections, {$push: [newCollection]});
    //   return {
    //     collections: newCollections
    //   };
    // })
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="collection-list">
        <CreateCollection onCreate={this.onCreate} />
        {collections.map(item => (
            <CollectionListItem key={item.id.toString()} collectionId={item.id} title={item.title} cardCount={item.cardCount} />
        ))}
			</div>
    );
  }
}

export default CollectionList;
