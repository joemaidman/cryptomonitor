import React from 'react';
import * as R from 'ramda';
import { ResponsiveContainer } from 'recharts';

import renderChart from './ChartStrategies';
import { convertUNIXTimeStampToDate } from '../../Utilities/DateUtilities';
import { takeLast, removeZeroRecords } from '../../Utilities/DataUtilities';

class Chart extends React.Component {
    render() {

        const { chartType, data, days } = this.props;

        const cleanedChartData =
            this.mapTimeStamps(
                takeLast(days,
                    removeZeroRecords(data))
            );

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
                    {renderChart(chartType, cleanedChartData)}
                </ResponsiveContainer>
            </div>
        );
    }

    mapTimeStamps(data) {
        R.map((record) => {
            return {
                ...record,
                time: convertUNIXTimeStampToDate(record.time)
            }
        },
            data);
    }

}

export default Chart;
