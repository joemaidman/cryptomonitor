import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import initialState from '../../initialState';
import Price from './Price'
import PriceMove from '../PriceTileHeader/PriceMove';

describe('Price', () => {

    let component;

    const defaultProps = {
        price: 100,
        baseCurrency: 'GBP',
        directionSinceLast: PriceMove.UP
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<Price {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('should render the price', () => {
        expect(component.find('h2').length).toEqual(1); 
    });

    it('should render with the correct colour', () => {
        expect(component.find('Icon').first().hasClass('green')).toBe(true);
    });

    it('should render with the correct currency, decimal precision and direction indicator', () => {
        expect(component.find('h2').first().text()).toEqual("£100.00arrow_drop_up");
    });

});