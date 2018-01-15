import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import PriceTilesContainer from './PriceTilesContainer'

describe('PriceTilesContainer', () => {

    let component;
    const noop = () => { };

    const defaultProps = {
        livePrices: [],
        historicPrices: [],
        updateHistoricPrices: noop,
        baseCurrency: 'USD',
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<PriceTilesContainer {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('THEN it renders a price tile for all the coins', () => {
        expect(component.find('PriceTile').length).toEqual(12);
    });

});