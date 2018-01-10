import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

ReactDOM.render(
    <Provider store={createStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
