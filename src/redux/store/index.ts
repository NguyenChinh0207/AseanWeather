import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import {weatherReducer} from '../reducers/weatherReducers';
import {favoriteLocationByUserReducer} from '../reducers/favoriteLocationByUserReducers';
import {cityReducer} from '../reducers/cityReducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weatherReducer,
    favoriteLocationByUserReducer,
    cityReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;