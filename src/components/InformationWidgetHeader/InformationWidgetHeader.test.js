import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import InformationWidgetHeader from './InformationWidgetHeader';

describe('InformationWidgetHeader', () => {

    let component;
    const noop = () => { };

    const defaultProps = {
        text: "Test",
        icon: "face",
        currentAmount: 20000,
        previousAmount: 10000
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<InformationWidgetHeader {...resolvedProps} />);
    }

    describe('GIVEN it is passed a current amount that is above previous', () => {

        beforeAll(() => {
            component = createComponentWithProps();
        });

        it('THEN it renders the icon in green', () => {
            expect(component.find('Icon').first().hasClass('green')).toBe(true);
        });

        it('THEN it renders the text', () => {
            expect(component.find('h3').first().text()).toEqual("Test");
        });

        it('THEN it renders the amount', () => {
            expect(component.find('h3').at(1).text()).toEqual("20,000");
        });

    });

    describe('GIVEN it is passed a current amount that is below previous', () => {

        beforeAll(() => {
            component = createComponentWithProps({
                currentAmount: 1,
                previousAmount: 2
            });
        });

        it('THEN it renders the icon in green', () => {
            expect(component.find('Icon').first().hasClass('red')).toBe(true);
        });

        it('THEN it renders the text', () => {
            expect(component.find('h3').first().text()).toEqual("Test");
        });

        it('THEN it renders the amount', () => {
            expect(component.find('h3').at(1).text()).toEqual("1");
        });

    });

});