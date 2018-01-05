
import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';

import classNames from 'classnames';
import * as CryptoIcon from 'react-cryptocoins';
import Icon from 'material-ui/Icon';

import Currencies from '../../resources/Currencies';
import PriceMove from './PriceMove'

class InformationWidgetHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            directionSinceLast: PriceMove.UNCHANGED.value,
            directionSinceYesterday: PriceMove.UNCHANGED.value
        }
    }

    componentWillReceiveProps({ price, previousPrice }) {
        this.setDirectionSinceLast(price);
        this.setDirectionSinceYesterday(price, previousPrice);
    }

    render() {

        const { text, icon, iconColour, price, previousPrice, baseCurrency } = this.props;

        const CoinIcon = CryptoIcon[icon];
        const priceFormat = price > 1 ? '0,0.00' : '0,0.0000'
        return (
            <div>
                <h2>
                    {text}
                </h2>

                <h2 className={classNames(this.state.directionSinceLast.value)}>
                    {R.find(R.propEq('code', baseCurrency), Currencies)['symbol']}
                    {numeral(price).format(priceFormat)}
                    <Icon className={classNames('price-indicator', this.state.directionSinceLast.value)}>
                        {this.state.directionSinceLast === PriceMove.UP && "arrow_drop_up"}
                        {this.state.directionSinceLast === PriceMove.DOWN && "arrow_drop_down"}
                    </Icon>
                </h2>
                <CoinIcon
                    className='md-86'
                    color={iconColour}
                    size={48}
                />
                <div className={classNames(this.state.directionSinceYesterday.value)}>
                    <h3>{previousPrice !== '' ?
                     `1D ${numeral(Math.round((((price / previousPrice) - 1) * 100), 2)).format('+0.00')}%`:
                     '1D -'}</h3>
                </div>
            </div>
        )
    }

    setDirectionSinceLast = (price) => {
        if (price === this.props.price) {
            return;
        }
        else if (this.props.price === '-') {
            this.setState({ directionSinceLast: PriceMove.UNCHANGED });
        }
        else if (price > this.props.price) {
            this.setState({ directionSinceLast: PriceMove.UP });
        }
        else {
            this.setState({ directionSinceLast: PriceMove.DOWN });
        }
    }

    setDirectionSinceYesterday = (price, previousPrice) => {

        if (price === previousPrice) {
            this.setState({ directionSinceYesterday: PriceMove.UNCHANGED });
        }
        else if (price > previousPrice) {
            this.setState({ directionSinceYesterday: PriceMove.UP });
        }
        else {
            this.setState({ directionSinceYesterday: PriceMove.DOWN });
        }
    }

}

export default InformationWidgetHeader;


