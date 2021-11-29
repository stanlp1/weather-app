import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Services/weatherApi'
import { getCityWeather } from './Services/weatherApi';
require('dotenv').config()

console.log(getCityWeather("Rowland HEights"));
ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

