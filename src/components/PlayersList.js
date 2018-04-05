import React from 'react';
import PlayersListItem from './PlayersListItem';

const PlayersList = (props) => (
    <div className="players-list">
        <h1>Players List</h1>
        <div className="player-list">
            {props.players.map((player) => {
                return <PlayersListItem key={player.id} {...player} />;
            })}
        </div>
    </div>
);

export default PlayersList;