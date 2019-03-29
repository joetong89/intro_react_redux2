import { createStore, combineReducers, applyMiddleware } from 'redux';
import filtersReducer from '../reducers/filters';
import playersReducer from '../reducers/players';
import selectedPlayerReducer from '../reducers/selectedPlayer'
import ReduxThunk from 'redux-thunk';

export default () => {
	let store = createStore(
		combineReducers({
			players: playersReducer,
			filters: filtersReducer,
			selectedPlayer: selectedPlayerReducer,
		}),
		{},
		applyMiddleware(ReduxThunk),
	);


	return store;
};