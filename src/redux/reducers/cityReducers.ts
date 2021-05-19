import { CityActionTypes } from "../actionTypes/cityTypes"
interface IAction {
    type: string;
    payload?: any;
}

interface IState {
    success: boolean;
    loading: boolean;
    loaded: boolean;
    load:boolean;
    error: string;
    data: any;
    city: any[]
    
}

const initalState:IState = {
    success: false,
    loading: false,
    loaded: false,
    load:false,
    error: '',
    data: {},
    city: [] 
}

export const cityReducer = (state = initalState, action:IAction) => {
    switch(action.type){
        case CityActionTypes.GET_CITY_SUCCESS: {
            return {
                ...state,
                success: true,
                city: action.payload
            }
        }
        case CityActionTypes.GET_CITY_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        
        default: {
            return state;
        }
    }
}