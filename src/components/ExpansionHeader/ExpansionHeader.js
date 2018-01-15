import React from 'react';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const ExpansionHeader = (props) => {
    const { isExpanded, handleExpandClick } = props;

    return (
        <CardActions className='action-row'>
            <IconButton disabled>
                <Icon className='icon'>
                    {'more_horiz'}
                </Icon>
            </IconButton>
            <div className='action-divider' />
            <IconButton
                onClick={() => { handleExpandClick() }}
                aria-expanded={isExpanded}
                aria-label='Show more'
            >
                <Icon className={isExpanded ? 'expandOpen' : 'expand'}>
                    {'keyboard_arrow_down'}
                </Icon>
            </IconButton>
        </CardActions>
    )
}

export default ExpansionHeader;