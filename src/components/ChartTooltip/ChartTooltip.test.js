import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ChartTooltip from './ChartTooltip';

describe('ChartTooltip', () => {

    let component;

    const defaultProps = {
        active: true,
        label: 'Test label',
        payload: [{
            payload: {
                close: 1,
                volumeto: 2

            }
        }]
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<ChartTooltip {...resolvedProps} />);
    }

    describe('GIVEN the tootlip is active', () => {

        beforeAll(() => {
            component = createComponentWithProps();
        });

        it('THEN it is visible', () => {
            expect(component.find('Paper').length).toEqual(1);
        });

        it('THEN it shows the correct label', () => {
            expect(component.find('p').first().text()).toEqual('Test label');
        });

        it('THEN it shows the correct price', () => {
            expect(component.find('p').at(1).text()).toEqual('Price: 1.00');
        });

        it('THEN it shows the correct volume', () => {
            expect(component.find('p').at(2).text()).toEqual('Volume: 2');
        });
    });

    describe('GIVEN the tootlip is not active', () => {

        beforeAll(() => {
            component = createComponentWithProps({
                active: false
            });
        });

        it('THEN it is visible', () => {
            expect(component.find('Paper').length).toEqual(0);
        });

    });

});