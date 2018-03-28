import React, { Component } from 'react';

class RadioButtons extends Component {

  render() {
    return (
      <div className="Question">
      {this.props.options.map((option, i) => <div key={i}>
        <input
          type="radio"
          id={`option${i}`}
          name="options"
          value={option}
          onChange={this.props.onChange} />
        <label htmlFor={`option${i}`}>{option}</label>
      </div>)}



      </div>
    );
  }
}

export default RadioButtons;
