import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Couter from './commponents/counter.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import Counters from'./commponents/counters.jsx'


ReactDOM.render(
<Counters></Counters>
  ,document.getElementById('root')
);


reportWebVitals();
