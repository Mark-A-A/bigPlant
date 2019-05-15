import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'

import { rootReducer } from './Reducers'

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  )
);