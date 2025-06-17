import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

// Glavna ulazna tačka aplikacije: inicijalizuje React, routing i globalno stanje putem Redux-a

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

