import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import customTheme from './assets/theme';
import {Provider} from 'react-redux';
import {store} from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);