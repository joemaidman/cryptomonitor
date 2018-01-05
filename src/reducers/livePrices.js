import initialState from '../initialState';

const livePrices = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LIVE_PRICES':
      return action.payload;
    case 'UPDATE_LIVE_ERROR':
      console.log('An error occured retrieving live data');
      return { ...state }
    default:
      return state;
  }
}

export default livePrices;