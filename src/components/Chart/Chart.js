import React from 'react';
import * as R from 'ramda';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    ComposedChart,
    XAxis,
    PieChart,
    Pie,
    ResponsiveContainer,
    Tooltip,
    YAxis
} from 'recharts';

import ChartType from './ChartType';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

const STROKE_COLOUR = '#5c8c8a';
const FILL_COLOUR = '#74afad';

class Chart extends React.Component {

    componentWillReceiveProps() {
        this.forceUpdate();
    }

    render() {

        const { chartType, data, days } = this.props;

        return (
            <div id="container">
                <h4 className='text-right'>
                    Chart
                </h4>
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                    maxHeight={100}
                    aspect={1}>
                    {renderChart(chartType,
                        mapUNIXTimeStampsToDate(
                            extractSubset(days,
                                removeEmptyPoints(data))
                        )
                    )}
                </ResponsiveContainer>
            </div>
        );
    }
}

const removeEmptyPoints = (data) => {
    return R.filter(
        R.where({
            close: R.compose(R.not, R.equals(0))
        })
    )(data);
}

const extractSubset = (count, data) => {
    return R.takeLast(count, data);
}

const mapUNIXTimeStampsToDate = (data) => {
    var ret = R.map((record) => {
        return {
            ...record,
            time: new Date(record.time * 1000).toLocaleDateString()
        }
    },
        data);
    return ret;
}

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
                dataKey="time"
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

const renderCompositeChart = (data) => {
    return (
        <ComposedChart data={data} >
            <Tooltip content={<ChartTooltip />} />
            <XAxis
                dataKey="time"
                hide={true}
            />
            <YAxis
                yAxisId="left"
                hide={true}
            />
            <YAxis
                yAxisId="right"
                hide={true}
            />
            <Bar
                animationDuration={500}
                dataKey='volumeto'
                fill={FILL_COLOUR}
                stroke={STROKE_COLOUR}
                yAxisId="left"
            />
            <Area
                animationDuration={500}
                type='monotone'
                dataKey='close'
                stroke={STROKE_COLOUR}
                fill={FILL_COLOUR}
                yAxisId="right"
            />
        </ComposedChart>
    )
}

const renderBarChart = (data) => {
    return (
        <BarChart data={data}>
            <Tooltip />
            <XAxis
                dataKey="name"
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

export default Chart;
