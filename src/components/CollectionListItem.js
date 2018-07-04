import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class CollectionListItem extends Component {
  render() {
    return (
			<Panel>
        <Panel.Heading>{this.props.title}</Panel.Heading>
        <Panel.Body><strong>Cards:</strong> {this.props.cardCount}</Panel.Body>
      </Panel>
    );
  }
}

export default CollectionListItem;
