import * as React from 'react';
import classNames from 'classnames';
import Icon from 'material-ui/Icon';

import PriceMove from '../PriceTileHeader/PriceMove';
import { formatCurrencyThousands, getCurrencySymbol } from '../../Utilities/NumberUtilities';
import '../../App/App.css';

const Price = (props) => {

    const { price, baseCurrency, directionSinceLast } = props;

    return (
        <h2 className={classNames(directionSinceLast.value)}>
            {formatCurrencyThousands(
                price,
                price > 1 ? 2 : 4,
                getCurrencySymbol(baseCurrency)
            )}
            <Icon className={classNames('price-indicator', directionSinceLast.value)}>
                {directionSinceLast === PriceMove.UP && 'arrow_drop_up'}
                {directionSinceLast === PriceMove.DOWN && 'arrow_drop_down'}
            </Icon>
        </h2>
    )
}

export default Price;