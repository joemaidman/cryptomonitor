import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Chart from './Chart';
import ChartType from './ChartType';

describe('Chart', () => {

    let component;

    const defaultProps = {
        chartType: ChartType.AREA,
        data: [
            { name: "January", value: 2 },
            { name: "February", value: 1 }
        ],
        days: 7
    };

    const createComponentWithProps = (overridenProps) => {
        const resolvedProps = Object.assign({}, defaultProps, overridenProps);
        return mount(<Chart {...resolvedProps} />);
    }

    describe('GIVEN it receives an area chartType', () => {

        beforeAll(() => {
            component = createComponentWithProps();
        });

        it('THEN it renders an area chart', () => {
            expect(component.find('AreaChart').length).toEqual(1);
        });

    });

    describe('GIVEN it receives a bar chartType', () => {

        beforeAll(() => {
            component = createComponentWithProps({
                chartType: ChartType.BAR
            });
        });

        it('THEN it renders an area chart', () => {
            expect(component.find('BarChart').length).toEqual(1);
        });

    });

    describe('GIVEN it receives a pie chartType', () => {

        beforeAll(() => {
            component = createComponentWithProps({
                chartType: ChartType.PIE
            });
        });

        it('THEN it renders an pie chart', () => {
            expect(component.find('PieChart').length).toEqual(1);
        });

    });

    describe('GIVEN it receives a composite chartType', () => {

        beforeAll(() => {
            component = createComponentWithProps({
                chartType: ChartType.COMPOSITE
            });
        });

        it('THEN it renders an composite chart', () => {
            expect(component.find('ComposedChart').length).toEqual(1);
        });

    });

});