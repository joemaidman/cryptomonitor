import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import initialState from '../../initialState';
import PriceChange from './PriceChange'
import PriceMove from '../PriceTileHeader/PriceMove';

describe('PriceChange', () => {

    let component;

    const defaultProps = {
        percentageChange: 5,
        directionSinceYesterday: PriceMove.UP,
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<PriceChange {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('should render the percentage change', () => {
        expect(component.find('h3').first().text()).toEqual('5');
    });

    it('should render with the correct colour based on the direction', () => {
        expect(component.find('h3').first().hasClass(PriceMove.UP.value)).toBe(true);
    });

});