import React, { Component } from 'react';
import './Questionnaire.css';

import ProgressBar from './ProgressBar';
import Question from './Question';
import NavigationButtons from './NavigationButtons';

import theQuestions from './the-questions.json';

class Questionnaire extends Component {

  constructor() {
    super();

    this.state = {
      questions: theQuestions,
      currentQuestion: 0,
      answers: [],
    };

    this.gotoNextQuestion = this.gotoNextQuestion.bind(this);
    this.gotoPreviousQuestion = this.gotoPreviousQuestion.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  gotoNextQuestion() {
    let {currentQuestion} = this.state;
    currentQuestion++;
    this.setState({currentQuestion});
  }

  gotoPreviousQuestion() {
    let {currentQuestion} = this.state;
    currentQuestion--;
    this.setState({currentQuestion});
  }

  handleUserInput(e) {
    let {answers, currentQuestion} = this.state;
    answers[currentQuestion] = e.target.value;
    this.setState({answers});
  }

  render() {

    const {currentQuestion, questions, answers} = this.state;
    const hasPreviousQuestion = currentQuestion > 0;
    const hasNextQuestion = currentQuestion < questions.length - 1;
    const hasNoAnswer = !answers[currentQuestion];

    return (
      <div className="Questionnaire">
        <ProgressBar />
        <Question
          question={theQuestions[currentQuestion]}
          answer={answers[currentQuestion]}
          onUserInput={this.handleUserInput}
        />
        <NavigationButtons
          showNext={hasNextQuestion}
          showBack={hasPreviousQuestion}
          onNext={this.gotoNextQuestion}
          onBack={this.gotoPreviousQuestion}
          nextDisabled={hasNoAnswer}
        />
      </div>
    );
  }
}

export default Questionnaire;
