import React from 'react';
import PlayersListItem from './PlayersListItem';
import { connect } from 'react-redux';
import { loadPlayers } from '../actions/players';
import getFilteredPlayers from '../selectors/players';

class PlayersList extends React.Component {
	componentDidMount() {
		this.props.dispatch(loadPlayers());
	}

	render() {
		return (
			<div className="players-list">
		        <h1>Players List</h1>
		        <div className="player-list">
		            {this.props.players.map((player) => {
		                return <PlayersListItem key={player.id} {...player} />;
		            })}
		        </div>
		    </div>
	    );
	}
    
}

const mapStateToProps = (state) => {
	return {
		players: getFilteredPlayers(state.players, state.filters)
	};
}

export default connect(mapStateToProps)(PlayersList);