import React from 'react';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import { CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';

import TextArea from '../TextArea/TextArea';
import Chart from '../Chart/Chart';
import FrequencySelector from '../FrequencySelector/FrequencySelector';
import TabType from '../PriceTile/TabType';
import ChartType from '../Chart/ChartType';

class ExpansionPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeFrequency: TabType.WEEK
        }
    }

    render() {

        const { isExpanded, description, moreInformationLink, data } = this.props;

        return (
            <Collapse
                in={isExpanded}
                timeout='auto'
                unmountOnExit
            >
                <CardContent>
                    <TextArea
                        title='Description'
                        content={description}
                        link={moreInformationLink}
                    />
                    {/* This pattern is clearly wrong but works around an outstanding bug in rechart */}
                    {/* When declaratively passing days to a single chart, the data is redrawn via a warped animation */}
                    {/* eslint-disable */}
                    {this.state.activeFrequency == 7 && (
                        <Chart
                            chartType={ChartType.COMPOSITE}
                            data={data}
                            days={this.state.activeFrequency}
                        />)
                    }
                    {this.state.activeFrequency == 30 && (<Chart
                        chartType={ChartType.COMPOSITE}
                        data={data}
                        days={this.state.activeFrequency}
                    />)
                    }
                    {this.state.activeFrequency == 365 && (<Chart
                        chartType={ChartType.COMPOSITE}
                        data={data}
                        days={this.state.activeFrequency}
                    />)
                    }
                    {/* eslint-enable */}
                    <FrequencySelector
                        activeFrequency={this.state.activeFrequency}
                        changeFrequency={this.handleChangeFrequency}
                    />
                </CardContent>
            </Collapse>
        )
    }

    handleChangeFrequency = (event) => {
        this.setState({ activeFrequency: event.target });
    };

}

export default ExpansionPanel;