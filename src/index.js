import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Questionnaire from './Questionnaire';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Questionnaire />, document.getElementById('root'));
registerServiceWorker();
