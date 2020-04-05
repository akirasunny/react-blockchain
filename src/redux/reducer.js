import { INIT_STATES } from './initStates';
import {
    INIT_CURRENCIES,
    REMOVE_CURRENCY,
    ADD_CURRENCY
} from './actionTypes';

const defaultReducer = (state = INIT_STATES, action) => {
    const currencies = [...state.currencies];
    switch(action.type) {
        case INIT_CURRENCIES: 
            return {
                ...state,
                currencies: action.payload
            };

        case REMOVE_CURRENCY:
            currencies.forEach((currency, i) => {
                if (i === action.payload.index) {
                    currency.show = false;
                }
            });
            return {...state, currencies};
        
        case ADD_CURRENCY:
            currencies.forEach((currency, i) => {
                if (i === action.payload.index) {
                    currency.show = true;
                }
            });
            return {...state, currencies};
        
        default:
            return state;
    }
};

export default defaultReducer;