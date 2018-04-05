import React from 'react';
import { Link } from 'react-router-dom';

const PlayersListItem = ({ dispatch, id, name, sport_type, skill_level, gender, message }) => (
    <div className="player">
        <div className="player-info">
            <p>
                <Link to={'/edit/'+id}>
                    {name} ({gender})<br />
                </Link>
                {sport_type} - {skill_level}<br /><br />
                {message}
            </p>
            <button className="button button-clear" onClick={() => {
                alert("Add Remove Player code!");
            }}>Remove</button>
        </div>
    </div>
);

export default PlayersListItem;