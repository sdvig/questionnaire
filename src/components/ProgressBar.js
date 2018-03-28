import React, { Component } from 'react';
import './ProgressBar.css';

const ProgressBar = ({percentage}) => {
  return (
    <div className="ProgressBar">
      <div style={{ width: `${percentage}%` }} className="ProgressBar__Filling" />
    </div>
  );
}

export default ProgressBar;
