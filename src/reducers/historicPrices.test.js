import historicPrices from './historicPrices';

describe('historicPrices', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterAll(() => {
        consoleSpy.mockRestore();
    });

    const initialState = {
        'configuration': {
            'baseCurrency': 'USD'
        },
        'historicPrices': {},
        'livePrices': {}
    };

    it('should have initial state by default', () => {
        expect(historicPrices(undefined, {})).toEqual(initialState);
    });

    it('should handle UPDATE_HISTORIC_PRICES', () => {
        const updateHistoricPricesAction = {
            type: 'UPDATE_HISTORIC_PRICES',
            payload: {
                coinCode: 'GBP',
                data: {
                    Data: [1, 2, 3]
                }
            }
        };

        expect(historicPrices({}, updateHistoricPricesAction)).toEqual({'GBP': {'data': [1, 2, 3]}});
    });

    it('should handle UPDATE_HISTORIC_ERROR', () => {
        
        const updateHistoricErrorAction = {
            type: 'UPDATE_HISTORIC_ERROR',
            payload: {
                coinCode: 'GBP'
            }
        };

        expect(historicPrices({}, updateHistoricErrorAction)).toEqual({});
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

});

