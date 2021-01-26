import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'react-thunk';

import postReducer from './reducers/postReducer';

const rootReducers = combineReducers({
  posts: postReducer,
});

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
