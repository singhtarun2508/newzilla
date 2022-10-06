import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { setConfig } from 'react-google-translate';
 
// setConfig({
//   clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? '',
//   privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? '',
//   projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? ''
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
