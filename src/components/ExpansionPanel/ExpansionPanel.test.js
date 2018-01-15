import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ExpansionPanel from './ExpansionPanel';

describe('ExpansionPanel', () => {

    let consoleSpy;

    beforeAll(() => {
        // Suppress warning from recharts about width/height not set during tests
        consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterAll(() => {
        consoleSpy.mockRestore();
    });

    let component;
    const noop = () => { };

    const defaultProps = {
        isExpanded: false,
        description: 'Test description',
        data: [
            { time: 'January', open: 1, close: 2, volumeto: 1 },
            { time: 'February', open: 2, close: 3, volumeto: 1 }
        ],
        moreInformationLink: 'http://test.com'
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<ExpansionPanel {...resolvedProps} />);
    }

    describe('GIVEN the panel is not expanded', () => {

        beforeAll(() => {
            component = createComponentWithProps();
        });

        it('THEN is does not render', () => {
            expect(component.find('Collapse').at(0).props().in).toEqual(false);
        });

    });

    describe('GIVEN the panel is expanded', () => {

        beforeAll(() => {
            component = createComponentWithProps({ isExpanded: true });
        });

        it('THEN it renders', () => {
            expect(component.find('Collapse').at(0).props().in).toEqual(true);
        });
        it('THEN it renders render the card content', () => {
            expect(component.find('CardContent').length).toEqual(1);
        });

        it('THEN it renders the text area', () => {
            expect(component.find('CardContent').length).toEqual(1);
        });

        it('THEN it renders a single chart', () => {
            expect(component.find('Chart').length).toEqual(1);
        });

        it('THEN it renders the frequency selector', () => {
            expect(component.find('FrequencySelector').length).toEqual(1);
        });

    });

});