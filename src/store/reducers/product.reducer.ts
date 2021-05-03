import { ProductActionTypes } from "../actionTypes/productTypes";

interface IAction {
    type: string;
    payload?: any;
}

const initalState = {
    success: false,
    product: {id: 1, name: 'a-phone', price: 10},
    products: []
}

export const productReducer = (state = initalState, action: IAction) => {
    switch(action.type){
        case ProductActionTypes.GET_ALL: {
            return {
                ...state,
                success: true,
                products: action.payload
            }
        }
        case ProductActionTypes.GET_ONE: {
            return {
                ...state,
                success: true,
                product: action.payload
            }
        }
        default: {
            return state;
        }
    }
}