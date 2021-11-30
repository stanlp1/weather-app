import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';
import './index.css';
import './Services/weatherApi'

ReactDOM.render(
  <React.StrictMode>
     <Weather></Weather>
  </React.StrictMode>,
  document.getElementById('root')
);

