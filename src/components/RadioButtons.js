import React, { Component } from 'react';

import './RadioButtons.css';

class RadioButtons extends Component {

  render() {
    const {options, onUserInput, answer} = this.props;
    return (
      <div className="RadioButtons">
        {options.map((option, i) => <div className="RadioButtonField" key={i}>
          <input
            type="radio"
            id={`option-${i}`}
            name="options"
            value={option}
            checked={option===answer}
            onChange={onUserInput} />
          <label htmlFor={`option-${i}`}>{option}</label>
        </div>)}
      </div>
    );
  }
}

export default RadioButtons;
