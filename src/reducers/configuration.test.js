import configuration from './configuration';

describe('configuration', () => {

    const initialState = {
        'configuration': {
            'baseCurrency': 'USD'
        },
        'historicPrices': {},
        'livePrices': {}
    };

    it('should have initial state by default', () => {
        expect(configuration(undefined, {})).toEqual(initialState);
    });

    it('should handle UPDATE_BASE_CURRENCY', () => {
        const updateBaseCurrencyAction = {
            type: 'UPDATE_BASE_CURRENCY',
            payload: 'GBP'
        };

        expect(configuration({}, updateBaseCurrencyAction)).toEqual({ baseCurrency: 'GBP' });
    });

});

