import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import PageFooter from './PageFooter';

describe('PageFooter', () => {

    let component;

    const createComponent = () => {
        return mount(<PageFooter />);
    }

    beforeAll(() => {
        component = createComponent();
    });

    it('should display footer text', () => {
        expect(component.find('p').length).toEqual(1);
    });

});