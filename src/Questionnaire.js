import React, { Component } from 'react';
import './Questionnaire.css';

import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import NavigationButtons from './components/NavigationButtons';
import QuestionnaireSummary from './components/QuestionnaireSummary';

import theQuestions from './data/the-questions.json';

class Questionnaire extends Component {

  constructor() {
    super();

    // Assuming that the questionnaire didn't change
    const localAnswers = JSON.parse(localStorage.getItem('answers'));
    const localCurrentPage = parseInt(localStorage.getItem('currentQuestion'), 10);
    const localShowSummary = localStorage.getItem('showSummary');

    this.state = {
      questions: theQuestions,
      currentQuestion: localCurrentPage || 0,
      answers: localAnswers || [],
      showSummary: localShowSummary || false
    };

    this.gotoNextQuestion = this.gotoNextQuestion.bind(this);
    this.gotoPreviousQuestion = this.gotoPreviousQuestion.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.gotoSummary = this.gotoSummary.bind(this);
  }

  setCurrentQuestion(currentQuestion) {
    this.setState({currentQuestion});
    localStorage.setItem('currentQuestion', currentQuestion)
  }

  gotoNextQuestion() {
    let {currentQuestion} = this.state;
    this.setCurrentQuestion(currentQuestion + 1);

  }

  gotoPreviousQuestion() {
    let {currentQuestion} = this.state;
    this.setCurrentQuestion(currentQuestion - 1);
  }

  gotoSummary() {
    this.setState({showSummary: true});
    localStorage.setItem('showSummary', true);
  }

  handleUserInput(e) {
    let {answers, currentQuestion} = this.state;
    answers[currentQuestion] = e.target.value;
    this.setState({answers});
    localStorage.setItem('answers', JSON.stringify(answers));
  }

  render() {

    const {currentQuestion, questions, answers, showSummary} = this.state;
    const percentage = (currentQuestion + 1) * 100 / questions.length;
    const hasPreviousQuestion = currentQuestion > 0;
    const hasNextQuestion = currentQuestion < questions.length - 1;
    const hasNoAnswer = !answers[currentQuestion];

    return (
      <div className="Questionnaire">
        <ProgressBar percentage={percentage} />
        {!showSummary && <Question
            question={questions[currentQuestion]}
            answer={answers[currentQuestion]}
            onUserInput={this.handleUserInput}
          />}
        {!showSummary && <NavigationButtons
            showNext={hasNextQuestion}
            showBack={hasPreviousQuestion}
            onNext={this.gotoNextQuestion}
            onBack={this.gotoPreviousQuestion}
            nextDisabled={hasNoAnswer}
            onFinish={this.gotoSummary}
          />}
        {showSummary && <div>
          <QuestionnaireSummary questions={questions} answers={answers} />
        </div>}
      </div>
    );
  }
}

export default Questionnaire;
