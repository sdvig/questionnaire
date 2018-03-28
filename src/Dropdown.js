import React, { Component } from 'react';

class Dropdown extends Component {

  render() {
    return (
      <div className="Question">
        <select name="answers" onChange={this.props.onChange}>
          {this.props.options.map(option =>
            <option value={option}>{option}</option>)}
        </select>
      </div>
    );
  }
}

export default Dropdown;
