import React from 'react';
import Radio from 'material-ui/Radio';

import Currencies from '../../resources/Currencies';

class CurrencySelector extends React.Component {
  render() {

    const { baseCurrency, changeBaseCurrency } = this.props;

    return (
      <div className='base-currency-radio-group'>
        {Currencies.map((currency) => {
          return (
            <div className='base-currency-radio-group' key={currency.code} >
              <h4 className='radio-label light-green'>
                {currency.code}
              </h4>
              <Radio
                key={currency.code}
                className='base-currency-radio-btn'
                checked={baseCurrency === currency.code}
                onChange={() => { changeBaseCurrency(currency.code) }}
                value={currency.code.toString()}
                name={currency.code}
                aria-label={currency.code}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default CurrencySelector;