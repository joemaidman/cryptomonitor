import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import PageHeader from './PageHeader';

describe('PageHeader', () => {

    let component;

    const createComponent = () => {
        return mount(<PageHeader />);
    }

    beforeAll(() => {
        component = createComponent();
    });

    it('should display the logo', () => {
        expect(component.find('img').length).toEqual(1);
    });

});