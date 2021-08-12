import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './components/Users'
import reportWebVitals from './reportWebVitals';
import App from './App';
import UserDetails from './components/UserDetails'

ReactDOM.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
