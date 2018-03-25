import React, { Component } from 'react';
import './Questionnaire.css';

import ProgressBar from './ProgressBar';
import Question from './Question';
import NavigationButtons from './NavigationButtons';
import QuestionnaireSummary from './QuestionnaireSummary';

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
    this.gotoSummary = this.gotoSummary.bind(this);
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

  gotoSummary() {
    this.setState({currentQuestion: 'all'});
  }

  handleUserInput(e) {
    let {answers, currentQuestion} = this.state;
    answers[currentQuestion] = e.target.value;
    this.setState({answers});
  }

  render() {

    const {currentQuestion, questions, answers} = this.state;
    const showSummary = currentQuestion === 'all';
    const hasPreviousQuestion = currentQuestion > 0;
    const hasNextQuestion = currentQuestion < questions.length - 1;
    const hasNoAnswer = !answers[currentQuestion];

    return (
      <div className="Questionnaire">
        <ProgressBar />
        {!showSummary && <div>
          <Question
            question={questions[currentQuestion]}
            answer={answers[currentQuestion]}
            onUserInput={this.handleUserInput}
          />
          <NavigationButtons
            showNext={hasNextQuestion}
            showBack={hasPreviousQuestion}
            onNext={this.gotoNextQuestion}
            onBack={this.gotoPreviousQuestion}
            nextDisabled={hasNoAnswer}
            onFinish={this.gotoSummary}
          />
        </div>}
        {showSummary && <div>
          <QuestionnaireSummary questions={questions} answers={answers} />
        </div>}
      </div>
    );
  }
}

export default Questionnaire;
