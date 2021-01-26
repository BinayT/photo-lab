import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'react-thunk';

import postReducer from './reducers/postReducer';

const reducers = combineReducers({
  posts: postReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));
