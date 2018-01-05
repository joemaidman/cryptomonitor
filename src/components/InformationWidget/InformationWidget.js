import React from 'react';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import Grid from 'material-ui/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Radio from 'material-ui/Radio';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import * as R from 'ramda';

import InformationWidgetHeader from '../InformationWidgetHeader/InformationWidgetHeader';
import Chart from '../Chart/Chart';
import ChartType from '../Chart/ChartType';
import TabType from './TabType';
import TextArea from '../TextArea/TextArea';

class InformationWidget extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
            activeTab: TabType.WEEK.value
        }
    }

    componentWillMount() {
        const { updateHistoricPrices, priceCode, baseCurrency } = this.props;

        updateHistoricPrices(priceCode, baseCurrency);

    }

    componentWillReceiveProps({ baseCurrency, priceCode, updateHistoricPrices }) {
        if (baseCurrency !== this.props.baseCurrency) {
            updateHistoricPrices(priceCode, baseCurrency);
        }
    }

    render() {

        const { text, icon, iconColour, price, data, baseCurrency, description, moreInformationLink } = this.props;
        const { activeTab } = this.state;

        return (
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <Card className="paper-widget card-parent">
                    <CardContent>
                        <InformationWidgetHeader
                            text={text}
                            icon={icon}
                            iconColour={iconColour}
                            price={price}
                            baseCurrency={baseCurrency}
                            previousPrice={R.last(data) ? R.last(data).open : ''}
                        />
                    </CardContent>
                    <CardActions className='action-row'>
                        <IconButton disabled>
                            <Icon className='icon'>
                                {"more_horiz"}
                            </Icon>
                        </IconButton>
                        <div className='action-divider' />
                        <IconButton
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <Icon className={this.state.expanded ? 'expandOpen' : 'expand'}>
                                {"keyboard_arrow_down"}
                            </Icon>
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <TextArea
                                title='Description'
                                content={description}
                                link={moreInformationLink}
                            />
                            {/* This pattern is clearly wrong but works around an outstanding bug in rechart */}
                            {/* When declaratively passing days to a single chart, the data is redrawn via a warped animation */}
                            {activeTab == 7 && <Chart
                                chartType={ChartType.COMPOSITE}
                                data={data}
                                days={activeTab}
                            />}
                            {activeTab == 30 && <Chart
                                chartType={ChartType.COMPOSITE}
                                data={data}
                                days={activeTab}
                            />}

                            {activeTab == 365 && <Chart
                                chartType={ChartType.COMPOSITE}
                                data={data}
                                days={activeTab}
                            />}
                            <div>
                                <h4 className='radio-label grey'>
                                    W
                                </h4>
                                <Radio
                                    className='chart-radio-btn'
                                    checked={activeTab == TabType.WEEK.value}
                                    onChange={this.handleChangePeriod}
                                    value={TabType.WEEK}
                                    name="W"
                                    aria-label="W"
                                />
                                <h4 className='radio-label grey'>
                                    M
                                </h4>
                                <Radio
                                    className='chart-radio-btn'
                                    checked={activeTab == TabType.MONTH}
                                    onChange={this.handleChangePeriod}
                                    value={TabType.MONTH}
                                    name="M"
                                    aria-label="M"
                                />
                                <h4 className='radio-label grey'>
                                    Y
                                </h4>
                                <Radio
                                    className='chart-radio-btn'
                                    checked={activeTab == TabType.YEAR}
                                    onChange={this.handleChangePeriod}
                                    value={TabType.YEAR}
                                    name="Y"
                                    aria-label="Y"
                                />
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        )
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    handleChangePeriod = (event) => {
        console.log('new tab: ' + event.target.value)
        this.setState({ activeTab: event.target.value });
    };

}

export default InformationWidget;
