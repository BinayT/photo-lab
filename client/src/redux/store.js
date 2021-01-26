import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'react-thunk';

import postReducer from './reducers/postReducer';

const rootReducers = combineReducers({
  posts: postReducer,
});

const middlewares = [thunk];

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
