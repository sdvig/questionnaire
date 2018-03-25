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
    };
  }

  render() {
    return (
      <div className="Questionnaire">
        <ProgressBar />
        <Question data={theQuestions[0]} />
        <NavigationButtons />
      </div>
    );
  }
}

export default Questionnaire;
