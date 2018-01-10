import React from 'react';
import Radio from 'material-ui/Radio';

import TabType from '../PriceTile/TabType';

class FrequencySelector {

    render() {

        const { activeFrequency, changeFrequency } = this.props;
        return (
            <div>
                <h4 className='radio-label grey'>
                    W
                </h4>
                <Radio
                    className='chart-radio-btn'
                    checked={activeFrequency == TabType.WEEK.value}
                    onChange={(e) => {changeFrequency(e)}}
                    value={TabType.WEEK}
                    name="W"
                    aria-label="W"
                />
                <h4 className='radio-label grey'>
                    M
                </h4>
                <Radio
                    className='chart-radio-btn'
                    checked={activeFrequency == TabType.MONTH}
                    onChange={(e) => {changeFrequency(e)}}
                    value={TabType.MONTH}
                    name="M"
                    aria-label="M"
                />
                <h4 className='radio-label grey'>
                    Y
                </h4>
                <Radio
                    className='chart-radio-btn'
                    checked={activeFrequency == TabType.YEAR}
                    onChange={(e) => {changeFrequency(e)}}
                    value={TabType.YEAR}
                    name="Y"
                    aria-label="Y"
                />
            </div>
        )
    }
}

export default FrequencySelector;