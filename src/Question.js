import React, { Component } from 'react';
import './Question.css';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';

class Question extends Component {

  render() {
    const {data} = this.props;
    console.log('/// question data: ', this.props.data);
    return (
      <div className="Question">
        <p>{data.question}</p>
        {data.type === "textInput" && <input
          type="text"
          value={data.answer}
          onChange={this.props.onUserInput}
        />}
        {data.type === "dropdown" && <Dropdown
          onChange={this.props.onUserInput}
          options={data.options} />}
        {data.type === "radioButtons" && <RadioButtons
          onChange={this.props.onUserInput}
          options={data.options}
          />}
      </div>
    );
  }
}

export default Question;
