import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel, Button } from 'react-bootstrap';

class CollectionListItem extends Component {
  render() {
    return (
			<Panel>
        <Panel.Heading>{this.props.title}</Panel.Heading>
        <Panel.Body>
          <p><strong>Cards:</strong> {this.props.cardCount}</p>
          <Button href={`/collection/${this.props.collectionId}`}>Open</Button>
        </Panel.Body>
      </Panel>
    );
  }
}

export default CollectionListItem;
