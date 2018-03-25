import React, { Component } from 'react';
import './NavigationButtons.css';

class NavigationButtons extends Component {

  render() {

    return (
      <div className="NavigationButtons">
        <a className="Button BackButton" href="#">Back</a>
        <a className="Button NextButton DisabledButton" href="#">Next</a>
      </div>
    );
  }
}

export default NavigationButtons;
