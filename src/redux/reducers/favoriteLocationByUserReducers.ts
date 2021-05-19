import { FavoriteLocationByUserActionTypes } from "../actionTypes/FavoriteLocationByUserTypes"
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
    favoriteLocationByUser: any[]
    
}

const initalState:IState = {
    success: false,
    loading: false,
    loaded: false,
    load:false,
    error: '',
    data: {},
    favoriteLocationByUser: [] 
}

export const favoriteLocationByUserReducer = (state = initalState, action:IAction) => {
    switch(action.type){
        case FavoriteLocationByUserActionTypes.GET_FAVORITE_LOCATION_BY_USER_SUCCESS: {
            return {
                ...state,
                success: true,
                favoriteLocationByUser: action.payload
            }
        }
        case FavoriteLocationByUserActionTypes.GET_FAVORITE_LOCATION_BY_USER_FAIL: {
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