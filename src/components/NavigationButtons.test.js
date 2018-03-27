import React from 'react';

import NavigationButtons from './NavigationButtons';

it('renders no buttons when prop are not defined', () => {

  const component = shallow(<NavigationButtons />);

  expect(component.children().length).toBe(0);
});
