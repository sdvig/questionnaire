import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Questionnaire from './Questionnaire';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path={'/:questionNumber?'} render={(route) => {
              const {questionNumber} = route.match.params;
              return <Questionnaire current={questionNumber} />
            }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
