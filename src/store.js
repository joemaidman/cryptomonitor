import {
  createStore as createReduxStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk'

import initialState from './initialState';
import rootReducer from './combineReducers';

const enhancers = []

const middleware = [
  thunk
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const createStore = createReduxStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default createStore;