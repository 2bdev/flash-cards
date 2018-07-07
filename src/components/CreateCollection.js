import React, { Component } from 'react';
import { Modal, Button, ControlLabel, FormControl } from 'react-bootstrap';

class CreateCollection extends Component {
  constructor(props) {
		super(props);

		this.state = {
			show: false,
      newTitle: '',
		};

		this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSaveClose = this.handleSaveClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSaveClose() {
    this.props.onCreate({
      newTitle: this.state.newTitle
    });
    this.setState({
      newTitle: ''
    });
    this.handleClose();
  }

  handleChange(e) {
    this.setState({
      newTitle: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSaveClose();
    }
  }

  render() {
    return (
      <div className="create-collection">
        <h3 onClick={this.handleShow}>Create a new collection</h3>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Collection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>New Collection Title</ControlLabel>
            <FormControl
              type="text"
              value={this.state.newTitle}
              placeholder="New Collection"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              autofocus="true"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSaveClose}>Create</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateCollection;
