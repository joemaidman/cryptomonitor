import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createMuiTheme } from 'material-ui/styles';

import initialState from '../initialState'
import { App } from './App';

describe('App', () => {
    it('THEN it renders', () => {
        const component = shallow(<App
            {...initialState}
            updateLivePrices={() => { }}
        />);
        expect(component.find('div')).toHaveLength(1);
    });
});