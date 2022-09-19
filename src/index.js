import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <App />
);