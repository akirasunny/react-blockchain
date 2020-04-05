import { INIT_STATES } from './initStates';
import {
    REMOVE_CURRENCY,
    ADD_CURRENCY
} from './actionTypes';

const defaultReducer = (state = INIT_STATES, action) => {
    switch(action.type) {
        case REMOVE_CURRENCY:
            const { currencies } = state;
            currencies.forEach((currency, i) => {
                if (i === action.payload.index) {
                    currency.show = !currency.show;
                }
            });
            return {...state, currencies};
        
        case ADD_CURRENCY:
            console.log('add currency');
            break;
        
        default:
            return state;
    }
};

export default defaultReducer;