import {
    INIT_CURRENCIES,
    REMOVE_CURRENCY,
    ADD_CURRENCY
} from './actionTypes';
import axios from 'axios';

export const fetchCurrency = () => {
    return async (dispatch) => {
        try {
            const currencyRequest = await axios.get('https://www.stackadapt.com/coinmarketcap/map');
            const currencies = currencyRequest.data.data.slice(0, 10);
            const currencyIds = currencies.map((currency) => currency.id);
            const priceRequest = await axios.get(`https://www.stackadapt.com/coinmarketcap/quotes?id=${currencyIds.join(',')}`);
            const priceData = priceRequest.data.data;
            currencies.forEach((currency, i) => {
                currency.index = i;
                currency.show = i < 5;
                currency.price = priceData[currency.id].quote;
            });

            dispatch({
                type: INIT_CURRENCIES,
                payload: currencies
            });
        } catch (err) {
            console.log(err);
        }
    }
};

export const removeCurrency = (currency) => {
    return {
        type: REMOVE_CURRENCY,
        payload: currency
    }
};

export const addCurrency = (currency) => {
    return {
        type: ADD_CURRENCY,
        payload: currency
    }
};