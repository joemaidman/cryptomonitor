import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import initialState from '../initialState'
import { App } from './App';

describe('Container', () => {
    it('THEN it renders', () => {
        const component = shallow(<App {...initialState} />);
        expect(component.find('div')).toHaveLength(1);
    });
});