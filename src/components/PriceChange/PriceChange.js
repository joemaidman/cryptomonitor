import * as React from 'react';
import classNames from 'classnames';

const PriceChange = (props) => {
    const { percentageChange, directionSinceYesterday } = props;

    return (
        <div className={classNames(directionSinceYesterday.value)}>
            <h3>{percentageChange}</h3>
        </div>
    )
}

export default PriceChange;