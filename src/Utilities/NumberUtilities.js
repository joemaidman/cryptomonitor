import numeral from 'numeral';
import * as R from 'ramda';

import Currencies from '../resources/Currencies';

export const formatThousands = (number, decimalPoints) => {
    return numeral(number).format('0,0' + (decimalPoints > 0 ? ('.' + '0'.repeat(decimalPoints)) : ''));
}

export const formatCurrencyThousands = (number, decimalPoints, currency) => {
    return currency + formatThousands(number, decimalPoints);
}

export const formatPercentageReturn = (number, decimalPoints) => {
    return numeral(number).format('+0,0' + (decimalPoints > 0 ? '.' + '0'.repeat(decimalPoints) : '')) + '%';
}

export const getCurrencySymbol = (currency) => {
    return R.find(R.propEq('code', currency), Currencies)['symbol'];
}

export const calculatePercentageChange = (finalValue, startValue) => {
    return (((finalValue / startValue) - 1) * 100);
}
