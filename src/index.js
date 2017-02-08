import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import App from './App';
import './index.css';

import reducer from './redux/reducers';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(apiMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
