import React, { Component } from 'react';

class Dropdown extends Component {

  render() {
    const {options} = this.props;
    return (
      <select name="answers">
        {options.map(option =>
          <option value={option}>{option}</option>)}
      </select>
    );
  }
}

export default Dropdown;
