import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import CurrencySelector from './CurrencySelector';

describe('CurrencySelector', () => {

    let component;
    const noop = () => { };

    const defaultProps = {
        baseCurrency: 'GBP',
        changeBaseCurrency: noop
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<CurrencySelector {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('should display all the currency codes', () => {
        expect(component.find('h4').at(0).text()).toEqual('USD');
        expect(component.find('h4').at(1).text()).toEqual('GBP');
        expect(component.find('h4').at(2).text()).toEqual('EUR');
    });

    it('should shows a radio button for each currency', () => {
        expect(component.find('Radio').length).toEqual(3);
    });

    it('should select the base currency radio button', () => {
        expect(component.find('Radio').at(1).props().checked).toEqual(true);
    });

    it('should not select other currency radio buttons', () => {
        expect(component.find('Radio').at(0).props().checked).toEqual(false);
        expect(component.find('Radio').at(2).props().checked).toEqual(false);
    });

});