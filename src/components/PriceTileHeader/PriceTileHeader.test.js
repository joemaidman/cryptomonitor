import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import PriceTileHeader from './PriceTileHeader'
import PriceMove from './PriceMove';

describe('PriceTileHeader', () => {

    let component;

    const defaultProps = {
        text: 'Bitcoin',
        icon: 'Btc',
        iconColour: 'red',
        price: 100,
        previousPrice: 99,
        baseCurrency: 'USD',
        directionSinceLast: PriceMove.UP,
        directionSinceYesterday: PriceMove.DOWN
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<PriceTileHeader {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('THEN it renders the text name of the coin', () => {
        expect(component.find('h2').first().text()).toEqual("Bitcoin");
    });

    it('THEN it renders the coin icon component', () => {
        expect(component.find('Btc').length).toEqual(1);
    });

    it('THEN it renders the price component', () => {
        expect(component.find('Price').length).toEqual(1);
    });

    it('THEN it renders the price change component', () => {
        expect(component.find('PriceChange').length).toEqual(1);
    });

});