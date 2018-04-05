import React from 'react';
import PlayerForm from './PlayerForm';

const EditPlayerPage = (props) => {
    return (
        <div className="container">
            <h1>Edit Player</h1>
            <PlayerForm
                player={props.player}
                onSubmit={(player) => {
                    alert ("Add Edit Player code!");
                }}
            />
            <button className="button button-delete" onClick={() => {
                alert ("Add Remove Player code!");
            }}>Remove</button>
        </div>
    );
}

export default EditPlayerPage;