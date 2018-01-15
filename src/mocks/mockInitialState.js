const mockInitialState = {
    livePrices: {
        'BTC':
            { 'USD': 13798.61 }
    },
    historicPrices: {
        BTC: {
            data: [
                {
                    'time': 1514764800,
                    'close': 13444.88,
                    'high': 13921.53,
                    'low': 12877.67,
                    'open': 13850.49,
                    'volumefrom': 78425.21,
                    'volumeto': 1057521524.42
                }]
        }
    },
    configuration: {
        baseCurrency: 'USD'
    }

};

export default mockInitialState;