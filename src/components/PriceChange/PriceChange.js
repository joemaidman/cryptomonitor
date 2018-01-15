import * as React from 'react';
import classNames from 'classnames';

const PriceChange = (props) => {
    const { percentageChange, directionSinceYesterday } = props;

    return (
        <div>
            <h3 className={classNames(directionSinceYesterday.value)}>
                {percentageChange}
            </h3>
        </div>
    )
}

export default PriceChange;