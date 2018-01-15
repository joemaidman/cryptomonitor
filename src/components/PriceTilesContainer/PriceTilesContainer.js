import React from 'react';
import Grid from 'material-ui/Grid';

import PriceTile from '../PriceTile/PriceTile';
import Coins from '../../resources/Coins';
import '../../App/App.css';

class PriceTilesContainer extends React.Component {
    render() {

        const { livePrices, historicPrices, updateHistoricPrices, baseCurrency } = this.props;
        return (
            <Grid container>
                {Coins.map((coin) => {
                    return (
                        <PriceTile
                            key={coin.priceCode}
                            text={coin.name}
                            description={coin.description}
                            icon={coin.iconCode}
                            priceCode={coin.priceCode}
                            moreInformationLink={coin.more}
                            iconColour={coin.iconColour}
                            price={
                                livePrices[coin.priceCode] ?
                                    livePrices[coin.priceCode][baseCurrency] :
                                    '-'}
                            data={historicPrices[coin.priceCode] ?
                                historicPrices[coin.priceCode].data :
                                { data: [] }}
                            baseCurrency={baseCurrency}
                            updateHistoricPrices={updateHistoricPrices}
                        />
                    )
                })}
            </Grid>
        )
    }
}

export default PriceTilesContainer;

