import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

class CollectionListItem extends Component {
  render() {
    return (
			<Panel>
        <Panel.Heading>{this.props.title}</Panel.Heading>
        <Panel.Body>
          <strong>Cards:</strong> {this.props.cardCount}
          <Link to={`/collection/${this.props.collectionId}`}>Open</Link>
        </Panel.Body>
      </Panel>
    );
  }
}

export default CollectionListItem;
