import React, { Component } from 'react';
import './NavigationButtons.css';

class NavigationButtons extends Component {

  render() {
    const {current, last, nextDisabled} = this.props;
    const previous = parseInt(current, 10) - 1;
    const next = parseInt(current, 10) + 1;
    const isLastQuestion = parseInt(current, 10) === parseInt(last, 10);
    console.log(`current question: ${current}, previous question: ${previous}, next question: ${next}, last question: ${last}`, nextDisabled);
    ;

    return (
      <div className="NavigationButtons">
        {Boolean(previous) && <a className="Button BackButton" href={`/${previous}`}>Back</a>}
        {!isLastQuestion && !nextDisabled && <a className="Button NextButton" href={`/${next}`}>Next</a>}
        {!isLastQuestion && nextDisabled && <span className="Button NextButton DisabledButton">Next</span>}
      </div>
    );
  }
}

export default NavigationButtons;
