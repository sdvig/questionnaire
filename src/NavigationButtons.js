import React, { Component } from 'react';
import './NavigationButtons.css';

class NavigationButtons extends Component {

  render() {
    const {showNext, showBack, onNext, onBack} = this.props;
    return (
      <div className="NavigationButtons">
        {showBack && <button onClick={onBack} className="Button BackButton">Back</button>}
        {showNext && <button onClick={onNext} className="Button NextButton">Next</button> }
      </div>
    );
  }
}

export default NavigationButtons;
