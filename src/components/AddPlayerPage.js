import React from 'react';
import PlayerForm from './PlayerForm';

const AddPlayerPage = (props) => (
    <div className="container">
        <h1>Add a Player</h1>
        <PlayerForm 
            onSubmit={(player) => {
                alert("You still need to add your create player code!");
            }}
        />
    </div>
);

export default AddPlayerPage;