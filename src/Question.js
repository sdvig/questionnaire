import React, { Component } from 'react';
import './Question.css';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';

class Question extends Component {

  render() {
    const {question, type, options} = this.props.data;
    const isTextInput = type === 'textInput';
    const isDropdown = type === 'dropdown';
    const isRadiobuttons = type === 'radioButtons';
    return (
      <div className="Question">
        <p>{question}</p>
        {isTextInput && <input type="text" value="" />}
        {isDropdown && <Dropdown options={options} />}
        {isRadiobuttons && <RadioButtons options={options} />}
      </div>
    );
  }
}

export default Question;
