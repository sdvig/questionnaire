import React from 'react';
import './Question.css';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';

const Question = (props) => {

  const {question, type, options} = props.question;
  const {answer, onUserInput} = props;
  const isTextInput = type === 'textInput';
  const isDropdown = type === 'dropdown';
  const isRadiobuttons = type === 'radioButtons';

  return (
    <div className="Question">
      <p>{question}</p>
      {isTextInput && <input
        type="text"
        value={answer || ''}
        onChange={onUserInput}
      />}
      {isDropdown && <Dropdown
        options={options}
        answer={answer}
        onUserInput={onUserInput}
      />}
      {isRadiobuttons && <RadioButtons
        options={options}
        answer={answer}
        onUserInput={onUserInput}
      />}
    </div>
  );
}

export default Question;
