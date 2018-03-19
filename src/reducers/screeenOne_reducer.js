import { INCREMENT_VALUE, DECREMENT_VALUE, RESET_VALUE } from '../actions/types';

const initialState = { values: 0 };

export default function(state = initialState, action){
    switch(action.type){
        case INCREMENT_VALUE:
            return { ...state, values: state.values + 1 };
        case DECREMENT_VALUE:
            return { ...state, values: state.values - 1 };
        case RESET_VALUE:
            return { ...state, ...initialState  };
        default:
            return state;
    }
}