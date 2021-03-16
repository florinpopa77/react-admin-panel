import { createStore, combineReducers } from 'redux';
import { backgroundReducer } from './reducers/background';
import { textColorReducer } from './reducers/textColor';
import { usersDisplayReducer } from './reducers/usersDisplay';


const rootReducer = combineReducers({
     background: backgroundReducer,
     text: textColorReducer,
     display: usersDisplayReducer
});


const store = createStore(rootReducer);

export default store;