import React from 'react';

import QuestionnaireSummary from './QuestionnaireSummary';

it('renders the questions and answers received in props', () => {
  const questions = [{ question: 'I am a test question' }];
  const answers = ['I am a test answer'];
  const component = shallow(<QuestionnaireSummary
      questions={questions}
      answers={answers}
    />);

  expect(component.find('p').at(0).text()).toEqual(questions[0].question);
  expect(component.find('p').at(1).text()).toEqual(answers[0]);
});
