import initialState from '../initialState';

const historicPrices = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HISTORIC_PRICES':
      return {
        ...state,
        [action.payload.coinCode]: {
          data: action.payload.data.Data
        }
      };
    case 'UPDATE_HISTORIC_ERROR':
      console.log('An error occured retrieving historic data for ' + action.payload.coinCode);
      return { ...state }
    default:
      return state;
  }
}

export default historicPrices;