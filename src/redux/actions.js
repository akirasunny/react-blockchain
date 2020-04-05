import {
    REMOVE_CURRENCY,
    ADD_CURRENCY
} from './actionTypes';

export const removeCurrency = (currency) => {
    return {
        type: REMOVE_CURRENCY,
        payload: currency
    }
};