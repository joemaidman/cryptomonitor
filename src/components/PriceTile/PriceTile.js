import React from 'react';
import * as R from 'ramda';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';

import PriceTileHeader from '../PriceTileHeader/PriceTileHeader';
import ExpansionHeader from '../ExpansionHeader/ExpansionHeader';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import PriceMove from '../PriceTileHeader/PriceMove';
import '../../App/App.css';

class PriceTile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            directionSinceLast: PriceMove.UNCHANGED.value,
            directionSinceYesterday: PriceMove.UNCHANGED.value,
            isExpanded: false
        }
    }

    componentWillReceiveProps({ baseCurrency, priceCode, updateHistoricPrices, price, previousPrice }) {
        this.setDirectionSinceLast(price);
        this.setDirectionSinceYesterday(price, previousPrice);
        if (baseCurrency !== this.props.baseCurrency) {
            this.setState({
                directionSinceLast: PriceMove.UNCHANGED.value
            })
            updateHistoricPrices(priceCode, baseCurrency);
        }
    }

    componentWillMount() {
        const { updateHistoricPrices, priceCode, baseCurrency } = this.props;

        updateHistoricPrices && updateHistoricPrices(priceCode, baseCurrency);
    }

    render() {

        const { text, icon, iconColour, price, data, baseCurrency, description, moreInformationLink } = this.props;

        return (
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <Card className='paper-widget card-parent'>
                    <CardContent>
                        <PriceTileHeader
                            text={text}
                            icon={icon}
                            iconColour={iconColour}
                            price={price}
                            baseCurrency={baseCurrency}
                            previousPrice={[data && R.last(data) ? R.last(data).open : price]}
                            directionSinceLast={this.state.directionSinceLast}
                            directionSinceYesterday={this.state.directionSinceYesterday}
                        />
                    </CardContent>
                    <ExpansionHeader
                        isExpanded={this.state.isExpanded}
                        handleExpandClick={this.handleExpandClick}
                    />
                    <ExpansionPanel
                        isExpanded={this.state.isExpanded}
                        description={description}
                        moreInformationLink={moreInformationLink}
                        data={data}
                    />
                </Card>
            </Grid>
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

    handleExpandClick = () => {
        this.setState({ isExpanded: !this.state.isExpanded });
    };

}

export default PriceTile;
