import { combineReducers, createStore,applyMiddleware } from "redux";
import { counterReducer } from './reducers/counter.reducer'
import { productReducer } from './reducers/product.reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    counterReducer,
    productReducer
});



export const store = createStore(rootReducer, applyMiddleware(thunk));