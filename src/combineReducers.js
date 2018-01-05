import { combineReducers } from 'redux';
import livePrices from './reducers/livePrices';
import historicPrices from './reducers/historicPrices';
import configuration from './reducers/configuration';

const rootReducer = combineReducers({
    livePrices,
    historicPrices,
    configuration
});

export default rootReducer;