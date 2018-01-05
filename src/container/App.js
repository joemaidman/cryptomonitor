import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from 'material-ui/Grid';
import Radio from 'material-ui/Radio';

import InformationWidget from '../components/InformationWidget/InformationWidget';
import logo from '../assets/logo.png';
import { updateLivePrices, updateHistoricPrices, changeBaseCurrency } from '../actions/actions';
import Coins from '../resources/Coins';
import Currencies from '../resources/Currencies';
import './App.css';

export class App extends Component {

  componentWillMount() {

    const { updateLivePrices, configuration } = this.props;

    updateLivePrices(configuration.baseCurrency);
    setInterval(() => updateLivePrices(configuration.baseCurrency), 20000);
  }

  render() {

    const { livePrices, historicPrices, configuration, updateHistoricPrices, changeBaseCurrency } = this.props;

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className='base-currency-radio-group'>
            {Currencies.map((currency) => {
              return <div className='base-currency-radio-group'>
                <h4 className='radio-label light-green'>
                  {currency.code}
                </h4>
                <Radio
                  key={currency.code}
                  className='base-currency-radio-btn'
                  checked={configuration.baseCurrency === currency.code}
                  onChange={() => { changeBaseCurrency(currency.code) }}
                  value={currency.code}
                  name={currency.code}
                  aria-label={currency.code}
                />
              </div>
            })}
          </div>
          <Grid container>
            {Coins.map((coin) => {
              return <InformationWidget
                key={coin.priceCode}
                text={coin.name}
                description={coin.description}
                icon={coin.iconCode}
                priceCode={coin.priceCode}
                moreInformationLink={coin.more}
                iconColour={coin.iconColour}
                price={
                  livePrices[coin.priceCode] ?
                    livePrices[coin.priceCode][configuration.baseCurrency] :
                    '-'}
                data={historicPrices[coin.priceCode] ?
                  historicPrices[coin.priceCode].data :
                  { data: [] }}
                baseCurrency={configuration.baseCurrency}
                updateHistoricPrices={updateHistoricPrices}
              />
            })}
          </Grid>
          <footer className='footer'>
            <p className='grey'>
              © Cryptomonitor 2018. Pricing provided by <a href='https://www.cryptocompare.com/' target='_blank' rel="noopener noreferrer">Cryptocompare</a>.
            </p>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    livePrices: state.livePrices,
    historicPrices: state.historicPrices,
    configuration: state.configuration
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLivePrices: (baseCurrency) => {
      dispatch(updateLivePrices(baseCurrency));
    },
    updateHistoricPrices: (coinPriceCode, baseCurrency) => {
      dispatch(updateHistoricPrices(coinPriceCode, baseCurrency));
    },
    changeBaseCurrency: (currencyCode) => {
      dispatch(changeBaseCurrency(currencyCode)
      );
    }
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ))(App);
