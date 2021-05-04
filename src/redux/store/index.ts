import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import {weatherReducer} from '../reducers/weatherReducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weatherReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;