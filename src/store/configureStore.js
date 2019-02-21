import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import envReducer from '../reducers/env';
import links from '../reducers/links';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      env: envReducer,
      links: links
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};