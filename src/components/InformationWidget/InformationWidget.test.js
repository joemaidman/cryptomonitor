import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import initialState from '../../initialState';
import InformationWidget from './InformationWidget';

describe('InformationWidget', () => {

    let component;

    const defaultProps = {
        text: "Test",
        icon: "face",
        data: [
            { name: "January", value: 2 },
            { name: "February", value: 1 }
        ]
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<InformationWidget {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('THEN it renders the header', () => {
        expect(component.find('InformationWidgetHeader').length).toEqual(1);
    });

    it('THEN it renders the buttons', () => {
        expect(component.find('Buttons').length).toEqual(1);
    });

    it('THEN it renders the chart', () => {
        expect(component.find('Chart').length).toEqual(1);
    });

});