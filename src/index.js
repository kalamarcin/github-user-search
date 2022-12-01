import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import GlobalStore from './Store/GlobalStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStore>
    <App />
    </GlobalStore>
  </React.StrictMode>
);


