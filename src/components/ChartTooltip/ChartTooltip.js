import React from 'react';
import numeral from 'numeral';
import Paper from 'material-ui/Paper';

class ChartTooltip extends React.Component {
    render() {
        const { active } = this.props;

        if (active) {
            const { payload, label } = this.props;
            return (
                <Paper className='paper-tooltip'>
                    <p className='tooltip-label bold text-right'>{label}</p>
                    <p><b>Price: </b>{numeral(payload[0].payload['close']).format('0,0.00')}</p>
                    <p><b>Volume: </b>{numeral(payload[0].payload['volumeto']).format('0,0')}</p>
                </Paper>
            );
        }

        return null;
    }
};

export default ChartTooltip;