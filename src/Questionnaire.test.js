import React from 'react';
import ReactDOM from 'react-dom';

import Questionnaire from './Questionnaire';
import Question from './components/Question';
import QuestionnaireSummary from './components/QuestionnaireSummary';

import theQuestions from './data/the-questions.json';

const getRenderedQuestion = component => component.render().find('.Question p').text()

beforeEach(() => {
  localStorage.getItem = () => { return null; }
  localStorage.setItem = () => { return null; }
});

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Questionnaire />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('when first time rendered shows the first question', () => {

  const component = shallow(<Questionnaire />);

  const firstQuestion = component.state().questions[0].question;

  expect(getRenderedQuestion(component)).toEqual(firstQuestion);
});

it('when gotoSummary() triggerred, renders Questionnaire summary', () => {

  const component = shallow(<Questionnaire />);

  component.instance().gotoSummary()
  component.update();

  expect(component.find(QuestionnaireSummary).length).toBe(1);
});

it('when handleUserInput() triggerred, updates the answers in state', () => {

  const component = shallow(<Questionnaire />);

  const testEvent = { target: { value: "I am a test answer" } };

  component.instance().handleUserInput(testEvent)
  component.update();

  const {answers} = component.state();

  expect(answers[0]).toEqual(testEvent.target.value);
});

it('when navigating back and forth showing corresponding questions', () => {

  const component = shallow(<Questionnaire />);

  component.instance().gotoNextQuestion();
  component.update();

  expect(getRenderedQuestion(component)).toEqual(theQuestions[1].question);

  component.instance().gotoPreviousQuestion()
  component.update();

  expect(getRenderedQuestion(component)).toEqual(theQuestions[0].question);
});
