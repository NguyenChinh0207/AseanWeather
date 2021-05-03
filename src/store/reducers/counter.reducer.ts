import { UP,DOWN } from "../actions/counter.actions";

interface IAction {
    type: string;
    payload?: any;
}

const initalState = {
    counter: 1,

}

export const counterReducer = (state = initalState, action: IAction) => {
    switch(action.type){
        case UP: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DOWN: {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        default: {
            return state;
        }
    }
}