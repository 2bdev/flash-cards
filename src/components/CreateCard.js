import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import firebase from '../firebase';
import '../assets/css/CreateCard.css';

class CreateCard extends Component {
  constructor(props) {
		super(props);

		this.state = {
      sideA: '',
			sideB: ''
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    const collectionId = this.props.collectionId;
    const cardsRef = firebase.database().ref('cards/'+collectionId);
    const newCard = { sideA: this.state.sideA, sideB: this.state.sideB };

    cardsRef.push().set(newCard);
    this.props.addCard();

    this.setState({
      sideA: '',
      sideB: ''
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="create-card">
        <h3>Create a new card</h3>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="createCardForm"
          >
            <ControlLabel>Side A</ControlLabel>
            <FormControl
              type="text"
              name="sideA"
              value={this.state.sideA}
              placeholder="Enter text"
              onChange={this.handleChange}
            />

            <ControlLabel>Side B</ControlLabel>
            <FormControl
              type="text"
              name="sideB"
              value={this.state.sideB}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Create</Button>
        </form>
      </div>
    );
  }
}

export default CreateCard;
