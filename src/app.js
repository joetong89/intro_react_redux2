import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './routes/MainRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// create the Redux Store (using our imported store)

ReactDOM.render(<MainRouter />, document.getElementById('app'));