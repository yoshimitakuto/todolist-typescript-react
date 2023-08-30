import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // App.tsxを見にいくというコンポーネント指定
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
