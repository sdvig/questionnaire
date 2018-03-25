import React, { Component } from 'react';
import './Question.css';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';

class Question extends Component {

  render() {

    const {question, type, options} = this.props.question;
    const {answer, onUserInput} = this.props;
    const isTextInput = type === 'textInput';
    const isDropdown = type === 'dropdown';
    const isRadiobuttons = type === 'radioButtons';
    return (
      <div className="Question">
        <p>{question}</p>
        {isTextInput && <input type="text" value={answer || ''} onChange={onUserInput} />}
        {isDropdown && <Dropdown options={options} answer={answer} onUserInput={onUserInput} />}
        {isRadiobuttons && <RadioButtons options={options} answer={answer} onUserInput={onUserInput} />}
      </div>
    );
  }
}

export default Question;
