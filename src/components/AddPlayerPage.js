import React from 'react';
import PlayerForm from './PlayerForm';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/players';

const AddPlayerPage = (props) => (
    <div className="container">
        <h1>Add a Player</h1>
        <PlayerForm 
            onSubmit={(player) => {
                props.dispatch(addPlayer(props.history, player));
            }}
        />
    </div>
);

export default connect()(AddPlayerPage)