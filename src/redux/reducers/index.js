import { combineReducers } from 'redux';
import factReducer from './factReducers';

const rootReducer = combineReducers({
    fact: factReducer,
});

export default rootReducer;
