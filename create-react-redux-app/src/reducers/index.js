import { clickReducer } from './clickReducer';
import { dropReducer } from './dropReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: clickReducer,
    dropState: dropReducer
})