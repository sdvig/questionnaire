import React from 'react';
import ReactDOM from 'react-dom';
import Questionnaire from './Questionnaire';

it('renders without crashing', () => {

  localStorage.getItem = () => { return null; }

  const div = document.createElement('div');
  ReactDOM.render(<Questionnaire />, div);
  ReactDOM.unmountComponentAtNode(div);
});
