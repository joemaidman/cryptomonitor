import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import initialState from '../../initialState';
import PriceTile from './PriceTile'

describe('PriceTile', () => {

    let component;

    const defaultProps = {
        text: "Bitcoin",
        icon: "Btc",
        iconColour: 'red',
        price: 100,
        data: [
            { time: "January", open: 1, close: 2, volumeto: 1 },
            { time: "February", open: 2, close: 3, volumeto: 1 }
        ],
        baseCurrency: 'GBP',
        description: 'Test description',
        moreInformationLink: 'http://test.com'
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<PriceTile {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('THEN it renders the header', () => {
        expect(component.find('PriceTileHeader').length).toEqual(1);
    });

    it('THEN it renders the expansion panel header', () => {
        expect(component.find('ExpansionHeader').length).toEqual(1);
    });

    it('THEN it renders the expansion panel', () => {
        expect(component.find('ExpansionPanel').length).toEqual(0);
    });

});