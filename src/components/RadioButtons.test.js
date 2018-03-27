import React from 'react';

import RadioButtons from './RadioButtons';

// TODO: decide what to do when there are no options.
// Most probably skip rendering this question

it('renders the radio buttons with the options that are passed via props', () => {

// Should I check for all the elements or it's enough?

  const testOptions = [
    'test',
    'another test',
    'one more test'
  ];
  const component = shallow(<RadioButtons options={testOptions} />);

  expect(component.children().length).toBe(3);
});
