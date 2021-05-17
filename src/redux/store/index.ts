import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { weatherReducer } from '../reducers/weatherReducers';
import { cityReducer } from '../reducers/cityReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weatherReducer,
    cityReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;