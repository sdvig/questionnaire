import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Questionnaire from './Questionnaire';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Questionnaire />, document.getElementById('root'));
registerServiceWorker();
