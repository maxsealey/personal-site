import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import projectReducer, { projectFetch } from './api/projectSlice';
import { projectAPI } from './api/projectAPI';

const store = configureStore({
  reducer:{
    projects: projectReducer,
    [projectAPI.reducerPath]: projectAPI.reducer
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(projectAPI.middleware)
  }
});

store.dispatch(projectFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

