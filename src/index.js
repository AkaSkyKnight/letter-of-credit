import React from 'react';
import ReactDOM from 'react-dom';
import './assets/themes/bootswatch/flatly/bootstrap.css';
import App from './screens/App';
import * as ServiceWorker from './services/ServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ServiceWorker.unregister();