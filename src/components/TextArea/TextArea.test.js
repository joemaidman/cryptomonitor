import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import initialState from '../../initialState';
import TextArea from './TextArea'

describe('TextArea', () => {

    let component;

    const defaultProps = {
        title: 'Title',
        content: 'Content',
        link: 'Link'
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<TextArea {...resolvedProps} />);
    }

    describe('GIVEN showTitle is not passed', () => {
        beforeAll(() => {
            component = createComponentWithProps();
        });

        it('THEN it renders the title by default', () => {
            expect(component.find('h4').length).toEqual(1);
        });

        it('THEN it renders the content', () => {
            expect(component.find('p').first().text()).toContain('Content');
        });

        it('THEN it renders the link', () => {
            expect(component.find('a').first().text()).toEqual('...');
        });

    });

    describe('GIVEN showTitle is set to false', () => {
        beforeAll(() => {
            component = createComponentWithProps({ showTitle: false });
        });

        it('THEN it does not render the title', () => {
            expect(component.find('h4').length).toEqual(0);
        });

    });

});
