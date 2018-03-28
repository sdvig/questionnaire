import React from 'react';

const Dropdown = ({options, answer, onUserInput}) => {
  return (
    <select name="answers" value={answer} onChange={onUserInput}>
      {options.map((option, i) =>
        <option value={option} key={i}>{option}</option>)}
    </select>
  );
}

export default Dropdown;
