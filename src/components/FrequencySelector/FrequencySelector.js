import React from 'react';
import Radio from 'material-ui/Radio';

import TabType from '../PriceTile/TabType';

const FrequencySelector = (props) => {

    const { activeFrequency, changeFrequency } = props;

    return (
        <div>
            <h4 className='radio-label grey'>
                W
                </h4>
            <Radio
                className='chart-radio-btn'
                // eslint-disable-next-line
                checked={activeFrequency == TabType.WEEK.value}
                onChange={(e) => { changeFrequency(e) }}
                value={TabType.WEEK.value.toString()}
                name='W'
                aria-label='W'
            />
            <h4 className='radio-label grey'>
                M
                </h4>
            <Radio
                className='chart-radio-btn'
                // eslint-disable-next-line
                checked={activeFrequency == TabType.MONTH}
                onChange={(e) => { changeFrequency(e) }}
                value={TabType.MONTH.value.toString()}
                name='M'
                aria-label='M'
            />
            <h4 className='radio-label grey'>
                Y
                </h4>
            <Radio
                className='chart-radio-btn'
                // eslint-disable-next-line
                checked={activeFrequency == TabType.YEAR}
                onChange={(e) => { changeFrequency(e) }}
                value={TabType.YEAR.value.toString()}
                name='Y'
                aria-label='Y'
            />
        </div>
    )
}

export default FrequencySelector;