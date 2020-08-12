import React from 'react';
import ReactDOM from 'react-dom';
import Uikit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import App from './App';

Uikit.use(Icons);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
