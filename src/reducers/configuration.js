import initialState from '../initialState';

const configuration = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BASE_CURRENCY':
            return {
                ...state,
                baseCurrency: action.payload
            };
        default:
            return state;
    }
}

export default configuration;