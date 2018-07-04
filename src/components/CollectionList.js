import React, { Component } from 'react';
import CollectionListItem from './CollectionListItem';

class CollectionList extends Component {
  render() {
    return (
      <div className="collection-list">
        <div className="create-collection">
          <h3>Create a new collection</h3>
        </div>
				<CollectionListItem title="State Capitals" cardCount="50" />
        <CollectionListItem title="World Capitals" cardCount="190" />
        <CollectionListItem title="US Presidents" cardCount="45" />
			</div>
    );
  }
}

export default CollectionList;
