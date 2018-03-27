import React from 'react';

import Question from './Question';
import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';

it('renders <Dropdown /> when question type is dropdown', () => {

  const component = shallow(<Question question={{type: "dropdown"}} />);

  expect(component.find(Dropdown).length).toBe(1);
});

it('renders <RadioButtons /> when question type is dropdown', () => {

  const component = shallow(<Question question={{type: "radioButtons"}} />);

  expect(component.find(RadioButtons).length).toBe(1);
});
