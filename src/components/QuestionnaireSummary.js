import React, { Component } from 'react';

import './QuestionnaireSummary.css';

class QuestionnaireSummary extends Component {

  onStartOver() {
    localStorage.clear();
    window.location.reload();
  }

  render() {

    const {questions, answers} = this.props;

    return (
      <div className="QuestionnaireSummary">
        {questions.map(({question}, i) => <div className="QuestionnaireSummary__Item" key={i}>
            <p>{question}</p>
            <p><strong>{answers[i]}</strong></p>
          </div>
        )}
        <p><button
          onClick={this.onStartOver}
          className="Button">Start over
        </button></p>
      </div>
    );
  }
}

export default QuestionnaireSummary;
