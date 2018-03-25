import React, { Component } from 'react';
import './Question.css';

class Question extends Component {

  render() {
    return (
      <p>{this.props.data.question}</p>
    );
  }
}

export default Question;
