
import React from 'react';
// eslint-disable-next-line
import materialIcons from 'material-design-icons/iconfont/material-icons.css';

import '../../App/App.css';

class TextArea extends React.Component {
    render() {

        const { title, content, link, showTitle = true } = this.props;

        return (
            <div className='text-area-container'>
                {showTitle && <h4 className='text-right'>
                    {title}
                </h4>}
                <p className='text-right grey'>
                    {content}
                     <a href={link} target='_blank'>...</a>
                </p>
            </div>
        )
    }

}

export default TextArea;


