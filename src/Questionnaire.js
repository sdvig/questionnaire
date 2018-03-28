import React, { Component } from 'react';

import Questions from './questions.json';

import ProgressBar from './ProgressBar';
import Question from './Question';
import NavigationButtons from './NavigationButtons';

class Questionnaire extends Component {

  constructor(props) {
    super();

    this.state = {
      questionNumber: props.current || 1,
      answers: Questions.map(() => {
        return {"answer": ""}
      })
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const {answers, questionNumber} = this.state;

    console.log('//// event: ', event);
    console.log('//// answer is: ', event.target.value);

    answers[questionNumber-1].answer = event.target.value;
    this.setState({answers});
  }

  render() {
    console.log("Questionnaire state:",  this.state);
    const {questionNumber, answers} = this.state;

    const hasAnswer = this.state.answers[questionNumber-1].answer !== "";

    return (
      <div className="App">
        <ProgressBar />
        <Question
          data={Questions[questionNumber-1]}
          onUserInput={this.handleUserInput}
          answer={answers[questionNumber-1].answer}
        />
        <NavigationButtons
          current={questionNumber}
          last={Questions.length}
          nextDisabled={!hasAnswer}
         />
      </div>
    );
  }
}

export default Questionnaire;
