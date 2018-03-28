import React, { Component } from 'react';

class QuestionnaireSummary extends Component {

  render() {

    const {questions, answers} = this.props;

    return (
      <div className="QuestionnaireSummary">
        {questions.map(({question}, i) => <div key={i}>
            <p>{question}</p>
            <p><strong>{answers[i]}</strong></p>
          </div>
        )}
      </div>
    );
  }
}

export default QuestionnaireSummary;
