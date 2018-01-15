import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import FrequencySelector from './FrequencySelector';

describe('FrequencySelector', () => {
    let component;
    const noop = () => { };

    const defaultProps = {
        activeFrequency: 7,
        changeFrequency: noop
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<FrequencySelector {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('should display all the frequency options', () => {
        expect(component.find('h4').at(0).text()).toEqual('W');
        expect(component.find('h4').at(1).text()).toEqual('M');
        expect(component.find('h4').at(2).text()).toEqual('Y');
    });

    it('should shows a radio button for each frequency', () => {
        expect(component.find('Radio').length).toEqual(3);
    });

    it('should select the currently active frequency', () => {
        expect(component.find('Radio').at(0).props().checked).toEqual(true);
    });

    it('should not select other frequency radio buttons', () => {
        expect(component.find('Radio').at(1).props().checked).toEqual(false);
        expect(component.find('Radio').at(2).props().checked).toEqual(false);
    });

});