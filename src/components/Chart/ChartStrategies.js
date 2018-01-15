import React from 'react';
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    ComposedChart,
    PieChart,
    Pie,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

import ChartType from './ChartType';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

const STROKE_COLOUR = '#5c8c8a';
const FILL_COLOUR = '#74afad';

const renderChart = (chartType, data) => {
    switch (chartType) {
        case ChartType.AREA:
            return renderAreaChart(data);
        case ChartType.BAR:
            return renderBarChart(data);
        case ChartType.PIE:
            return renderPieChart(data);
        case ChartType.COMPOSITE:
            return renderCompositeChart(data);
        default:
            return renderAreaChart(data);
    }
}

const renderAreaChart = (data) => {
    return (
        <AreaChart data={data}>
            <Tooltip />
            <XAxis
                dataKey='time'
                hide={true}
            />
            <Area
                animationDuration={500}
                type='monotone'
                dataKey='close'
                stroke={STROKE_COLOUR}
                fill={FILL_COLOUR}
            />
        </AreaChart>
    )
}

const renderPieChart = (data) => {
    return (
        <PieChart>
            <Tooltip />
            <Pie
                animationDuration={750}
                data={data}
                dataKey={'value'}
                outerRadius={48}
                fill={FILL_COLOUR}
                stroke={STROKE_COLOUR}
            />
        </PieChart>
    )
}

const renderBarChart = (data) => {
    return (
        <BarChart data={data}>
            <Tooltip />
            <XAxis
                dataKey='name'
                hide={true}
            />
            <Bar
                animationDuration={500}
                dataKey='value'
                fill={FILL_COLOUR}
                stroke={STROKE_COLOUR}
            />
        </BarChart>
    )
}

const renderCompositeChart = (data) => {
    return (
        <ComposedChart data={data} >
            <Tooltip content={<ChartTooltip />} />
            <XAxis
                dataKey='time'
                hide={true}
            />
            <YAxis
                yAxisId='left'
                hide={true}
            />
            <YAxis
                yAxisId='right'
                hide={true}
            />
            <Bar
                animationDuration={500}
                dataKey='volumeto'
                fill={FILL_COLOUR}
                stroke={STROKE_COLOUR}
                yAxisId='left'
            />
            <Area
                animationDuration={500}
                type='monotone'
                dataKey='close'
                stroke={STROKE_COLOUR}
                fill={FILL_COLOUR}
                yAxisId='right'
            />
        </ComposedChart>
    )
}

export default renderChart;