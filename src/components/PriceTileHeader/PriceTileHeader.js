import React from 'react';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import * as CryptoIcon from 'react-cryptocoins';

import Price from '../Price/Price';
import PriceChange from '../PriceChange/PriceChange';
import { calculatePercentageChange, formatPercentageReturn } from '../../Utilities/NumberUtilities';
import '../../App/App.css';

class PriceTileHeader extends React.Component {

    render() {

        const { text, icon, iconColour, price, previousPrice, baseCurrency, directionSinceLast, directionSinceYesterday } = this.props;

        const CoinIcon = CryptoIcon[icon];
        return (
            <div>
                <h2>
                    {text}
                </h2>
                <Price
                    price={price}
                    baseCurrency={baseCurrency}
                    directionSinceLast={directionSinceLast}
                />
                <CoinIcon
                    className='md-86'
                    color={iconColour}
                    size={48}
                />
                <PriceChange
                    percentageChange={
                        formatPercentageReturn(
                            calculatePercentageChange(price, previousPrice), 2)
                    }
                    directionSinceYesterday={directionSinceYesterday}
                />
            </div>
        )
    }
}

export default PriceTileHeader;


