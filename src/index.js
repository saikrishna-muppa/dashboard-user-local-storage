import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/main.scss'
// import reportWebVitals from './reportWebVitals';
import Controller from './Controller';


ReactDOM.render(
  <React.StrictMode>
    <Controller/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
