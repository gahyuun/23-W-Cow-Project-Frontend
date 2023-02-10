import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
