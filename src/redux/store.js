import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { backgroundReducer } from './reducers/background';
import { textColorReducer } from './reducers/textColor';
import { usersDisplayReducer } from './reducers/usersDisplay';
import { usersReducer } from './reducers/users';
import { postsReducer } from './reducers/posts';


const rootReducer = combineReducers({
     background: backgroundReducer,
     text: textColorReducer,
     display: usersDisplayReducer,
     users: usersReducer,
     posts: postsReducer
});

const middlewares = [thunk, logger];


const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;