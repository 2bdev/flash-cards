import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import update from 'immutability-helper';
import CollectionListItem from './CollectionListItem';
import CreateCollection from './CreateCollection';

const collections = [
  {
    "title": "State Capitals",
    "cardCount": 50
  },
  {
    "title": "World Capitals",
    "cardCount": 190
  },
  {
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
      const newCollection = update(prevState.collections, {$push: [{title: data.newTitle, cardCount: 0}]});
      return {
        collections: newCollection
      };
    })
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="collection-list">
        <CreateCollection onCreate={this.onCreate} />
        {collections.map(item => (
            <CollectionListItem title={item.title} cardCount={item.cardCount} />
        ))}
			</div>
    );
  }
}

export default CollectionList;
