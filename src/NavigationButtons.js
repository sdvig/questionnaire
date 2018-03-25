import React, { Component } from 'react';
import './NavigationButtons.css';

class NavigationButtons extends Component {

  render() {
    const {showNext, showBack, onNext, onBack, nextDisabled} = this.props;
    return (
      <div className="NavigationButtons">
        {showBack && <button onClick={onBack} className="Button BackButton">Back</button>}
        {showNext && <button onClick={onNext} className="Button NextButton" disabled={nextDisabled}>Next</button> }
      </div>
    );
  }
}

export default NavigationButtons;
