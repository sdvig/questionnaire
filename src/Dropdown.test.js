import React from 'react';

import Dropdown from './Dropdown';

// TODO: decide what to do when there are no options.
// Most probably skip rendering this question

it('renders the select element with the options that are passed via props', () => {

// Should I check for all the elements or it's enough?

  const testOptions = [
    'test',
    'another test',
    'one more test'
  ];
  const component = shallow(<Dropdown options={testOptions} />);

  expect(component.children().length).toBe(3);
});
