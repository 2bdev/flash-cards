import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import update from 'immutability-helper';
import CollectionListItem from './CollectionListItem';
import CreateCollection from './CreateCollection';

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

class CollectionList extends Component {
  constructor(props) {
		super(props);

    this.state = {
      collections: collections
    };

    this.onCreate = this.onCreate.bind(this);
	}

  onCreate(data) {
    this.setState((prevState, props) => {
			// get next id
			let maxId = 0;
			prevState.collections.forEach(function(elem) {
				if(elem.id > maxId) {
					maxId = elem.id;
				}
			});
			let nextId = maxId + 1;
			const newCollection = { id: nextId, title: data.newTitle, cardCount: 0 };
      const newCollections = update(prevState.collections, {$push: [newCollection]});
      return {
        collections: newCollections
      };
    })
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
