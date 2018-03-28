import React from 'react';

import './RadioButtons.css';

const RadioButtons = ({options, onUserInput, answer}) => {
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

export default RadioButtons;
