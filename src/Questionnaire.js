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
      questionnaire: theQuestions,
      currentQuestion: 0,
    };

    this.gotoNextQuestion = this.gotoNextQuestion.bind(this);
    this.gotoPreviousQuestion = this.gotoPreviousQuestion.bind(this);
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

  render() {
    const {currentQuestion, questionnaire} = this.state;
    const hasPreviousQuestion = currentQuestion > 0;
    const hasNextQuestion = currentQuestion < questionnaire.length - 1;
    return (
      <div className="Questionnaire">
        <ProgressBar />
        <Question data={theQuestions[this.state.currentQuestion]} />
        <NavigationButtons
          showNext={hasNextQuestion}
          showBack={hasPreviousQuestion}
          onNext={this.gotoNextQuestion}
          onBack={this.gotoPreviousQuestion}
        />
      </div>
    );
  }
}

export default Questionnaire;
