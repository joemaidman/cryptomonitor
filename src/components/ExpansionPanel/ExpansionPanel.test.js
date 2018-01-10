import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ExpansionPanel from './ExpansionPanel';

describe('ExpansionPanel', () => {

    let component;
    const noop = () => { };

    const defaultProps = {
        isExpanded: false,
        description: 'Test description',
        data: [
            { time: "January", open: 1, close: 2, volumeto: 1 },
            { time: "February", open: 2, close: 3, volumeto: 1 }
        ],
        moreInformationLink: 'http://test.com'
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<ExpansionPanel {...resolvedProps} />);
    }

    beforeAll(() => {
        component = createComponentWithProps();
    });

    it('should render...', () => {
    });

});