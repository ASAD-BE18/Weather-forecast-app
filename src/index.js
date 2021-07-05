import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
//const autoComplete = document.createElement('script');
///autoComplete.type = "text/javascript";
//autoComplete.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBmI_AFu64SQXWL3pY2sHrGcmoGmizRjeQ";
//document.body.appendChild(autoComplete);