import React, { Component } from 'react';

class Dropdown extends Component {

  render() {
    const {options, answer, onUserInput} = this.props;
    return (
      <select name="answers" value={answer} onChange={onUserInput}>
        {options.map((option, i) =>
          <option value={option} key={i}>{option}</option>)}
      </select>
    );
  }
}

export default Dropdown;
