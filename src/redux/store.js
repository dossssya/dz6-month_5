import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // используем именованный импорт
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
