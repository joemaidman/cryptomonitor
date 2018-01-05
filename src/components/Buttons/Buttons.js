
import React from 'react';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

class Buttons extends React.Component {
    render() {

        const { increment, decrement } = this.props;

        return (
            <div>
                <IconButton
                    aria-label="Remove"
                    onClick={decrement}>
                    <Icon>
                        {"remove"}
                    </Icon>
                </IconButton>
                <IconButton
                    aria-label="Add"
                    onClick={increment} >
                    <Icon>
                        {"add"}
                    </Icon>
                </IconButton>
            </div>
        );
    }
}

export default Buttons;


