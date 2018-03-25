import React, { Component } from 'react';

class RadioButtons extends Component {

  render() {
    const {options} = this.props;
    return (
      <div className="RadioButtons">
        {options.map((option, i) => <div key={i}>
          <input
            type="radio"
            id={`option${i}`}
            name="options"
            value={option}/>
          <label htmlFor={`option${i}`}>{option}</label>
        </div>)}
      </div>
    );
  }
}

export default RadioButtons;
