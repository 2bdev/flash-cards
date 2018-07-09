import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../assets/css/App.css';
import '../assets/css/Card.css';
import firebase from '../firebase';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reveal: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState, props) => {
      return { reveal: !prevState.reveal }
    });
  }

  render() {
    const { sideA, sideB } = this.props;
    return (
      <div className="card" onClick={this.handleClick}>
        <p className="sideA">{sideA}</p>
				<p className={this.state.reveal ? 'sideB' : 'hide sideB'}>{sideB}</p>
      </div>
    );
  }
}

export default Card;
