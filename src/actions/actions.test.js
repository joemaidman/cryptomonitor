import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import { livePricesMockResponseSuccess, historicPricesMockResponseSuccess } from '../mocks/mockResponses';
import mockInitialState from '../mocks/mockInitialState';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const mockApiResponse = (status, response) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: status,
                response: response
            });
        });
    }

    describe('updateLivePrices', () => {

        it(`should create action UPDATE_LIVE_PRICES on success`, () => {

            mockApiResponse(200, livePricesMockResponseSuccess);

            const expectedActions = [
                { type: 'UPDATE_LIVE_PRICES', payload: livePricesMockResponseSuccess }
            ];

            const store = mockStore({});
            return store.dispatch(actions.updateLivePrices('GBP'))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });

    });

    describe('updateHistoricPrices', () => {

        it(`should create action UPDATE_HISTORIC_PRICES on success`, () => {

            mockApiResponse(200, historicPricesMockResponseSuccess);

            const expectedActions = [{
                type: 'UPDATE_HISTORIC_PRICES',
                payload: {
                    coinCode: 'BTC', data: historicPricesMockResponseSuccess
                }
            }];

            const store = mockStore({});
            return store.dispatch(actions.updateHistoricPrices('BTC', 'GBP'))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });

    });

    describe('changeBaseCurrency', () => {

        it(`should create action UPDATE_BASE_CURRENCY`, () => {

            const expectedActions = [
                { type: 'UPDATE_BASE_CURRENCY', payload: 'GBP' }
            ];

            const store = mockStore({});
            store.dispatch(actions.changeBaseCurrency('GBP'));
            expect(store.getActions()).toEqual(expectedActions);
        });

    });

});