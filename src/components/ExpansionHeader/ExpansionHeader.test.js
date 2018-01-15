import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ExpansionHeader from './ExpansionHeader';

describe('ExpansionHeader', () => {

    let component;
    const noop = () => { };

    const defaultProps = {
        isExpanded: false,
        handleExpandClick: noop
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<ExpansionHeader {...resolvedProps} />);
    }

    describe('GIVEN the panel is not expanded', () => {

        beforeAll(() => {
            component = createComponentWithProps();
        });

        it('THEN it shows the more icon', () => {
            expect(component.find('Icon').first().text()).toEqual('more_horiz');
        });

        it('THEN it shows the expand icon without translation', () => {
            expect(component.find('Icon').at(1).text()).toEqual('keyboard_arrow_down');
            expect(component.find('Icon').at(1).hasClass('expandOpen')).toBe(false);
        });
    });

    describe('GIVEN the panel is expanded', () => {

        beforeAll(() => {
            component = createComponentWithProps({ isExpanded: true });
        });

        it('THEN it shows the more icon', () => {
            expect(component.find('Icon').first().text()).toEqual('more_horiz');
        });

        it('THEN it shows the expand icon with css translation', () => {
            expect(component.find('Icon').at(1).text()).toEqual('keyboard_arrow_down');
            expect(component.find('Icon').at(1).hasClass('expandOpen')).toBe(true);
        });
    });

});