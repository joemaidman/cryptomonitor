import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PriceTile/PriceTile';
import CurrencySelector from '../components/CurrencySelector/CurrencySelector';
import PriceTilesContainer from '../components/PriceTilesContainer/PriceTilesContainer'
import {
  updateLivePrices,
  updateHistoricPrices,
  changeBaseCurrency
} from '../actions/actions';

const theme = createMuiTheme();

export class App extends Component {

  componentWillMount() {

    const { updateLivePrices, configuration } = this.props;

    updateLivePrices(configuration.baseCurrency);
    setInterval(() => updateLivePrices(configuration.baseCurrency), 20000);
  }

  render() {

    const { livePrices, historicPrices, configuration, updateHistoricPrices, changeBaseCurrency } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <PageHeader />
          <CurrencySelector
            changeBaseCurrency={changeBaseCurrency}
          />
          <PriceTilesContainer
            livePrices={livePrices}
            historicPrices={historicPrices}
            baseCurrency={configuration.baseCurrency}
            updateHistoricPrices={updateHistoricPrices}
          />
          <PageFooter />
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
