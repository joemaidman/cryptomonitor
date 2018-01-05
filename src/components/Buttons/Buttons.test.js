import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Buttons from './Buttons';

describe('Buttons', () => {

    let component;
    const noop = () => { };

    const defaultProps = {
        increment: noop,
        decrement: noop
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<Buttons {...resolvedProps} />);
    }

    describe('IT renders two buttons', () => {

        beforeAll(() => {
            component = createComponentWithProps();
        });

        it('THEN it renders increment and decrement buttons', () => {
            expect(component.find('IconButton').length).toEqual(2);
        });

    });

});