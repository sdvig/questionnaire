import React from 'react';

import NavigationButtons from './NavigationButtons';

it('renders no buttons when prop are not defined', () => {

  const component = shallow(<NavigationButtons />);

  // expect(component.children().length).toBe(0);
});

it('renders Back button when prop showBack is true', () => {

  const component = shallow(<NavigationButtons showBack={true} />);
  const button = component.children().find('.LeftAlignedButton');

  expect(button.length).toBe(1);
  expect(button.text()).toEqual('Back');
});

it('renders Finish button when prop showNext is false', () => {

  const component = shallow(<NavigationButtons showNext={false} />);
  const button = component.children().find('.RightAlignedButton');

  expect(button.length).toBe(1);
  expect(button.text()).toEqual('Finish');
});
