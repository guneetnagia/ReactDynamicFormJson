import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './component/Home/Home';
import trxData from './data/trx.json'


ReactDOM.render(<Home trxData={trxData}/>, document.getElementById('root'));

serviceWorker.unregister();
