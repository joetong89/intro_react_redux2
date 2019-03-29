import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainRouter from './routes/MainRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

import configStore from './store/configStore';

// create the Redux Store (using our imported store)
const store = configStore();

const jsx = (
	<Provider store={store}>
		<MainRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));