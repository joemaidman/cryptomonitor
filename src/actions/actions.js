import axios from 'axios';
import Coins from '../resources/Coins';
import Currencies from '../resources/Currencies';

const LIVE_PRICE_API = 'https://min-api.cryptocompare.com/data/pricemulti?';
const HISTORIC_PRICE_API = 'https://min-api.cryptocompare.com/data/histoday?limit=365';

const CoinCodes = Coins.map((coin) => {return coin.priceCode}).join(',');
const CurrencyCodes = Currencies.map((currency) => {return currency.code}).join(',');

export const updateLivePrices = (baseCurrency) => {

    const request = axios.get(LIVE_PRICE_API + 'tsyms=' + CurrencyCodes + '&fsyms=' + CoinCodes);
    return (dispatch) => {
        return request.then(({ data }) => {
            dispatch({
                type: 'UPDATE_LIVE_PRICES',
                payload: data
            });
        });
    };
}

export const updateHistoricPrices = (coinCode, baseCurrency) => {
    let request = axios.get((HISTORIC_PRICE_API + '&tsym=' + baseCurrency  + '&fsym=' + coinCode));
    return (dispatch) => {
        return request.then(({ data }) => {
            dispatch({
                type: 'UPDATE_HISTORIC_PRICES',
                payload: {
                    coinCode,
                    data
                }
            });
        });
    };
}

export const changeBaseCurrency = (currencyCode) => {
    return {
        type: 'UPDATE_BASE_CURRENCY',
        payload: currencyCode
    }
}