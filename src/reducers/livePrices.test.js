import livePrices from './livePrices';

describe('livePrices', () => {
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
        expect(livePrices(undefined, {})).toEqual(initialState);
    });

    it('should handle UPDATE_LIVE_PRICES', () => {
        const updateLivePricesAction = {
            type: 'UPDATE_LIVE_PRICES',
            payload:
                {
                    'BTC':
                        {
                            'USD': 13798.61
                        }
                }

        };

        expect(livePrices({}, updateLivePricesAction)).toEqual({'BTC': {'USD': 13798.61}});
    });

    it('should handle UPDATE_LIVE_ERROR', () => {

        const updateLiveErrorAction = {
            type: 'UPDATE_LIVE_ERROR',
            payload: {}
        };

        expect(livePrices({}, updateLiveErrorAction)).toEqual({});
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

});

