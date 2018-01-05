import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

ReactDOM.render(
    <Provider store={createStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
