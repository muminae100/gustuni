import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from './api/apiSlice';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ApiProvider api={apiSlice}>
   <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </ApiProvider>
  </React.StrictMode>
);
